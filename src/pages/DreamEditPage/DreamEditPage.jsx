import { DreamEditFormWidget } from '@/widgets/DreamEditFormWidget/DreamEditFormWidget'
import s from './DreamEditPage.module.scss'
import { useParams } from 'react-router'

function DreamEditPage() {
	const { id } = useParams()
	return (
		<div className={s['dream-editor']}>
			<div className="dream-editor-container">
				<DreamEditFormWidget dreamId={id} />
			</div>
		</div>
	)
}

export default DreamEditPage
