import db from '@/shared/config/firebase-config'
import {
	collection,
	doc,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	query,
	orderBy,
	limit,
	startAfter,
} from 'firebase/firestore/lite'

class DbOperations {
	constructor(name) {
		this.collectionRef = collection(db, name)
	}

	async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
		const realLimit = perPage + 1 // берём на 1 больше
		let q

		if (page === 1) {
			q = query(this.collectionRef, orderBy('title'), limit(realLimit))
		} else {
			const cursorId = cursors[page - 2] // теперь тут string (id)
			if (!cursorId) throw new Error('Cursor not found')

			// получаем снапшот по id и используем его в startAfter
			const cursorSnap = await getDoc(doc(this.collectionRef, cursorId))
			q = query(
				this.collectionRef,
				orderBy('title'),
				startAfter(cursorSnap),
				limit(realLimit)
			)
		}

		const snapshot = await getDocs(q)
		const docs = snapshot.docs

		const hasMore = docs.length > perPage

		const pageDocs = docs.slice(0, perPage)
		const data = pageDocs.map(d => ({ id: d.id, ...d.data() }))

		// курсор = id последнего документа на странице (сериализуемо)
		const lastVisible = pageDocs[pageDocs.length - 1] || null
		const cursor = lastVisible ? lastVisible.id : null

		return { data, cursor, hasMore }
	}

	async getById(id) {
		const snap = await getDoc(doc(this.collectionRef, id))
		return { id: snap.id, ...snap.data() }
	}

	async add(data) {
		await addDoc(this.collectionRef, data)
		return true
	}
	async update(id, data) {
		await updateDoc(doc(this.collectionRef, id), data)
		return true
	}
	async delete(id) {
		await deleteDoc(doc(this.collectionRef, id))
		return true
	}
}

export default DbOperations
