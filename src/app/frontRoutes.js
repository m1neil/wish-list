export const frontRoutes = {
	pages: {
		home: '/',
		dreams: {
			base: '/dreams',
			edit: ':id/edit',
			new: 'new',
		},
	},
	navigator: {
		home: '/',
		dreams: {
			base: '/dreams',
			edit: idDream => `/dreams/${idDream}/edit`,
			new: '/dreams/new',
		},
	},
}
