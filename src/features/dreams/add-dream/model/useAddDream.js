import { frontRoutes } from '@/app/frontRoutes'
import { useAddDreamMutation } from '@/entities/dream'
import { useRef } from 'react'
import { useNavigate } from 'react-router'

export const useAddDream = () => {
	const [addDreamMutation, { isLoading, isSuccess, error }] =
		useAddDreamMutation()
	const navigate = useNavigate()

	const addDream = async dreamData => {
		try {
			await addDreamMutation(dreamData).unwrap()
			setTimeout(() => {
				navigate(frontRoutes.navigator.dreams.base)
			}, 1500)
		} catch (error) {
			console.error('Field to add dream: ', error)
		}
	}

	return {
		addDream,
		isAddingDream: isLoading,
		errorAddDream: error,
		isSuccessAddDream: isSuccess,
	}
}
