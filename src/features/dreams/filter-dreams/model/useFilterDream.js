import { useEffect, useState } from 'react'

export const useFilterDreams = dreams => {
	const [filteredDreams, setFilteredDreams] = useState(() => [])
	const [filterStatus, setFilterStatus] = useState('')

	const handleFilterStatus = ({ target: { value } }) => {
		setFilterStatus(value)
	}

	useEffect(() => {
		if (!filterStatus) setFilteredDreams(dreams)
		else {
			setFilteredDreams(() =>
				dreams.filter(dream => dream.status === filterStatus)
			)
		}
	}, [filterStatus, dreams])

	return { filteredDreams, setFilteredDreams, filterStatus, handleFilterStatus }
}
