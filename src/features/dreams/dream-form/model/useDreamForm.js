import { useState } from 'react'

export const useDreamForm = initDataDream => {
	const [dataDreamFrom, setDataDreamForm] = useState(() => initDataDream)

	const handleDataDreamForm = ({ target }) => {
		const { name, value } = target
		setDataDreamForm(prevData => ({ ...prevData, [name]: value }))
	}

	return { dataDreamFrom, handleDataDreamForm, setDataDreamForm }
}
