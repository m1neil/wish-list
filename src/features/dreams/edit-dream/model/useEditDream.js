import { useGetDreamByIdQuery, useUpdateDreamMutation } from '@/entities/dream'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { frontRoutes } from '@/app/frontRoutes'
import { useDreamForm } from '../../dream-form/model/useDreamForm'

export const useEditDream = dreamId => {
	const navigate = useNavigate()
	const {
		data,
		isLoading,
		error: errorGetDream,
	} = useGetDreamByIdQuery(dreamId, {
		skip: dreamId === undefined,
	})
	const [
		updateDreamMutation,
		{ isLoading: isUpdating, isSuccess: isUpdated, error: errorUpdate },
	] = useUpdateDreamMutation()
	const { dataDreamFrom, handleDataDreamForm, setDataDreamForm } = useDreamForm(
		{}
	)

	useEffect(() => {
		if (data) setDataDreamForm(data)
	}, [data])

	const updateDream = async dreamData => {
		try {
			await updateDreamMutation(dreamData).unwrap()
			setTimeout(() => {
				navigate(frontRoutes.navigator.dreams.base)
			}, 1500)
		} catch (error) {
			console.error('Field to add dream: ', error)
		}
	}

	return {
		dataDreamEdit: dataDreamFrom,
		handleDataDreamEdit: handleDataDreamForm,
		updateDream,
		isUpdatingDream: isUpdating,
		isUpdatedDream: isUpdated,
		errorUpdateDream: isUpdating,
		isLoadingDream: isLoading,
		errorGetDream,
	}
}
