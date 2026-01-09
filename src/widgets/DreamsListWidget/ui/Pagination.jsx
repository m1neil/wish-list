import s from './Pagination.module.scss'

export default function Pagination({ page, setPage, hasMore }) {
	return (
		<div className={s['pagination']}>
			<button
				onClick={() => setPage(page - 1)}
				disabled={page <= 1}
				type="button"
				className="pagination-prev button"
			>
				◀ Prev
			</button>
			<div className={s['pagination-current']}>Page {page}</div>
			<button
				onClick={() => setPage(page + 1)}
				disabled={!hasMore}
				type="button"
				className="pagination-next button"
			>
				Next ▶
			</button>
		</div>
	)
}
