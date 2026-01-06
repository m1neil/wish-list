import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router'

export function MainLayout() {
	return (
		<>
			<Header />
			<main className="index">
				<Outlet />
			</main>
		</>
	)
}
