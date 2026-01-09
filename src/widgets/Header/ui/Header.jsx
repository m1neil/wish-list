import { frontRoutes } from '@/app/frontRoutes'
import { Link, useLocation } from 'react-router'
import { MainMenu } from '@/widgets/MainMenu'
import s from './Header.module.scss'

export function Header() {
	const location = useLocation()
	return (
		<header className={s.header}>
			<div className={s['header-container']}>
				{location.pathname === frontRoutes.pages.home ? (
					<div className={s['header-logo']}>WishDreams</div>
				) : (
					<Link to={frontRoutes.navigator.home} className={s['header-logo']}>
						WishDreams
					</Link>
				)}
				<MainMenu />
			</div>
		</header>
	)
}
