import { useRemoveDream } from '../model/useRemoveDream'

function RemoveDreamButton({ dreamId, className }) {
	const { onDeleteDream, isDeleting, isDeleted } = useRemoveDream(dreamId)
	return (
		<button
			disabled={isDeleting || isDeleted}
			onClick={onDeleteDream}
			className={`button button-red ${className}`}
		>
			{isDeleting || isDeleted ? 'Removing' : 'Remove'}
		</button>
	)
}

export default RemoveDreamButton
