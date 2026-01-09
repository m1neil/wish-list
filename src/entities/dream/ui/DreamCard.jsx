import { Fragment } from 'react'
import s from './DreamCard.module.scss'

export function DreamCard({ data, actions }) {
	const { title, text, yearAchieve, friendName, status, createdAt } = data
	const statusDreamModify = {
		planned: 'blue',
		progress: 'yellow',
		done: 'green',
	}

	return (
		<article className={s['card']}>
			<h3 className={s['card-title']}>{title}</h3>
			<p className={s['card-text']}>{text}</p>
			<div className={s['card-year']}>
				<span>Year of achievement:</span> {yearAchieve}
			</div>
			<div className={s['card-fried']}>
				<span>Achieving a dream with a friend:</span> {friendName}
			</div>
			<div className={s['card-footer']}>
				<div className={`${s['card-status']} ${s[statusDreamModify[status]]}`}>
					{status}
				</div>
				{createdAt && (
					<div className={s['card-date']}>{createdAt.split('T')[0]}</div>
				)}
			</div>
			<div className={s['card-actions']}>
				{actions.map((action, index) => (
					<Fragment key={index}>{action}</Fragment>
				))}
			</div>
		</article>
	)
}
