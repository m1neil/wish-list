import { routes } from '@/app/router'
import { NavLink } from 'react-router'
import s from './MainMenu.module.scss'

const createItemsMenu = (routes, basePath) => {
	let itemsMenu = []
	routes.forEach(route => {
		if (route?.meta?.label) {
			itemsMenu.push({
				path: route?.index ? basePath : basePath + route.path,
				label: route.meta.label,
			})
		}
		if (route?.children) {
			itemsMenu.push(
				...createItemsMenu(route.children, route?.index ? basePath : route.path)
			)
		}
	})

	return itemsMenu
}

export function MainMenu() {
	const itemsMenu = createItemsMenu(routes)

	return (
		<nav className={s['menu']}>
			<ul className={s['menu-list']}>
				{itemsMenu.map((item, index) => (
					<li key={index}>
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								`${s['menu-link']} ${isActive ? s['active'] : ''}`
							}
						>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
