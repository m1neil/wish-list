import { frontRoutes } from '@/app/frontRoutes'
import { Link } from 'react-router'

export function AddDreamButton({ className }) {
	return (
		<Link
			className={`button button-icon button-plus ${className}`}
			to={frontRoutes.navigator.dreams.new}
		>
			New Dream
		</Link>
	)
}
