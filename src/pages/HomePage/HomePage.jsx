import { frontRoutes } from '@/app/frontRoutes'
import { Link } from 'react-router'
import s from './HomePage.module.scss'

export default function HomePage() {
	return (
		<div className={s['home']}>
			<div className="home-container">
				<h1 className={`${s['home-title']} title`}>Dream planner</h1>
				<Link
					className="button button-icon-arrow"
					to={frontRoutes.navigator.dreams.base}
				>
					Dreams list
				</Link>
			</div>
		</div>
	)
}
