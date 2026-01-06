import { routes } from '@/app/router'
import { NavLink } from 'react-router'

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
		<nav className="menu">
			<ul className="menu-list">
				{itemsMenu.map((item, index) => (
					<li key={index} className="menu-item">
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								`menu-link ${isActive ? 'active' : ''}`
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
