import { frontRoutes } from '@/app/frontRoutes'
import { Link } from 'react-router'
import { MainMenu } from './MainMenu'

export function Header() {
	return (
		<header className="header">
			<div className="header-container">
				<Link to={frontRoutes.navigator.home} className="header-logo">
					WishDreams
				</Link>
				<MainMenu />
			</div>
		</header>
	)
}
