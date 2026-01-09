import { useGetDreamsQuery } from '@/entities/dream'
import { AddDreamButton } from '@/features/dreams/add-dream/ui/AddDreamButton'
import DreamsList from '@/widgets/DreamsListWidget/DreamsList'
import { useEffect, useState } from 'react'
import s from './DreamsPage.module.scss'
import { useFilterDreams } from '@/features/dreams/filter-dreams/model/useFilterDream'
import { FilterDreamSelect } from '@/features/dreams/filter-dreams/ui/FilterDreamSelect'

export default function DreamsPage() {
	const [page, setPage] = useState(1)
	const [cursors, setCursors] = useState([])
	const [dreams, setDreams] = useState(() => [])
	const perPage = 6
	const {
		filteredDreams,
		filterStatus,
		handleFilterStatus,
		setFilteredDreams,
	} = useFilterDreams(dreams)
	const { data, isLoading, error } = useGetDreamsQuery({
		page,
		perPage,
		cursors,
	})
	const hasMore = data?.hasMore

	useEffect(() => {
		if (!data?.data) return
		setDreams(data.data)
	}, [data?.data])

	useEffect(() => {
		if (!data?.cursor) return
		setCursors(prev => {
			const idx = page - 1
			if (prev[idx] === data.cursor) return prev
			const next = [...prev]
			next[idx] = data.cursor
			return next
		})
	}, [data?.cursor, page])

	useEffect(() => {
		if (page > 1 && data && (data.data?.length ?? 0) === 0) {
			setPage(p => p - 1)
		}
	}, [data, page])

	return (
		<div className={s['dreams']}>
			<div className="dreams-container">
				<div className={s['dreams-top']}>
					<h1 className="dreams-title title">Dreams List</h1>
					<AddDreamButton className={s['dreams-add']} />
				</div>
				<div className={s['dreams-filter']}>
					<label className={s['dreams-label']}>
						Filter by status
						<FilterDreamSelect
							className={s['drams-select']}
							value={filterStatus}
							onChange={handleFilterStatus}
						/>
					</label>
				</div>
				{/* Тут будет фильтр с поиском */}
				<DreamsList
					dreams={filteredDreams}
					isLoading={isLoading}
					error={error}
					page={page}
					setPage={setPage}
					hasMore={hasMore}
				/>
			</div>
		</div>
	)
}
