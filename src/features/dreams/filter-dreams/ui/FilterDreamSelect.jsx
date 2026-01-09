import { statusDreamOptions } from '../../dream-form/model/options'

export function FilterDreamSelect({ className, value, onChange }) {
	return (
		<select
			onChange={onChange}
			value={value}
			className={`select ${className}`}
			name="status"
		>
			<option value="">All</option>
			{statusDreamOptions.map((status, index) => (
				<option key={index} value={status}>
					{status}
				</option>
			))}
		</select>
	)
}
