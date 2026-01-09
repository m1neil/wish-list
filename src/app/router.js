import { MainLayout } from '@/widgets/MainLayout'
import { frontRoutes } from './frontRoutes'
import HomePage from '@/pages/HomePage/HomePage'
import DreamsPage from '@/pages/DreamsPage/DreamsPage'
import DreamEditPage from '@/pages/DreamEditPage/DreamEditPage'
import { createBrowserRouter } from 'react-router'
import PageNotFound from '@/pages/PageNotFound'

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: HomePage,
				meta: {
					label: 'Home',
				},
			},
			{
				path: frontRoutes.pages.dreams.base,
				children: [
					{
						index: true,
						Component: DreamsPage,
						meta: {
							label: 'Dreams list',
						},
					},
					{
						path: frontRoutes.pages.dreams.edit,
						Component: DreamEditPage,
					},
					{
						path: frontRoutes.pages.dreams.new,
						Component: DreamEditPage,
					},
				],
			},
			{
				path: '*',
				Component: PageNotFound,
			},
		],
	},
]

export const router = createBrowserRouter(routes)
