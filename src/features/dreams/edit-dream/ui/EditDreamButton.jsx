import { frontRoutes } from '@/app/frontRoutes'
import { Link } from 'react-router'

export function EditDreamButton({ dreamId, className }) {
	return (
		<Link
			className={`button button-blue ${className}`}
			to={frontRoutes.navigator.dreams.edit(dreamId)}
		>
			Edit
		</Link>
	)
}
