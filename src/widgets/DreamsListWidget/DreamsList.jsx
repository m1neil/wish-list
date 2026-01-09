import { DreamCard } from '@/entities/dream'
import Pagination from './ui/Pagination'
import { EditDreamButton } from '@/features/dreams/edit-dream'
import RemoveDreamButton from '@/features/dreams/remove-dream/ui/RemoveDreamButton'
import s from './DreamsList.module.scss'

export function DreamsList({
	dreams,
	page,
	setPage,
	hasMore,
	isLoading,
	error,
}) {
	return (
		<div className="dreams">
			{isLoading ? (
				<div className="loading">Loading dreams....</div>
			) : dreams.length === 0 ? (
				<div className="info">No dreams found</div>
			) : error ? (
				<div className="error">Couldn't get dreams</div>
			) : (
				<div className={s['dreams-list']}>
					{dreams.map(dream => (
						<DreamCard
							key={dream.id}
							data={dream}
							actions={[
								<EditDreamButton dreamId={dream.id} />,
								<RemoveDreamButton dreamId={dream.id} />,
							]}
						/>
					))}
				</div>
			)}
			<Pagination page={page} setPage={setPage} hasMore={hasMore} />
		</div>
	)
}

export default DreamsList
