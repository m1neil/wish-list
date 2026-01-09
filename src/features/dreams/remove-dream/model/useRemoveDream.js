import { useDeleteDreamMutation } from '@/entities/dream'

export const useRemoveDream = dreamId => {
	const [
		deleteDreamMutation,
		{ isLoading: isDeleting, isSuccess: isDeleted, error: errorDelete },
	] = useDeleteDreamMutation()

	const onDeleteDream = () => {
		if (confirm('Are you sure?')) deleteDreamMutation(dreamId)
	}

	return { onDeleteDream, isDeleting, isDeleted, errorDelete }
}
