export const initDataDream = {
	title: '',
	text: '',
	yearAchieve: '',
	friendName: '',
	status: '',
}

export const statusDreamOptions = ['planned', 'progress', 'done', 'archived']

export const skeletonDataDreamFields = [
	{
		name: 'title',
		type: 'text',
		placeholder: 'The name of the dream',
	},
	{
		name: 'text',
		type: 'textarea',
		placeholder: 'Dream description',
	},
	{
		name: 'yearAchieve',
		type: 'number',
		placeholder: 'Year of achievement',
	},
	{
		name: 'friendName',
		type: 'text',
		placeholder: 'A friend with whom we want to achieve',
	},
	{
		name: 'status',
		type: 'select',
		placeholder: 'Dream status',
	},
]
