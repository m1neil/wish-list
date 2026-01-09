import { statusDreamOptions } from '../model/options'
import s from './DreamForm.module.scss'

export function DreamForm({
	fields,
	data,
	handleData,
	isLoading,
	onSave,
	isNewDream,
	isSuccess,
	isLoadingData,
	error,
}) {
	const createFields = ({ name, type, placeholder }) => {
		let field
		switch (type) {
			case 'textarea':
				field = (
					<textarea
						className="input"
						key={name}
						value={data[name]}
						name={name}
						placeholder={placeholder}
						onChange={handleData}
					></textarea>
				)
				break
			case 'select':
				field = (
					<select
						className="select"
						key={name}
						value={data[name]}
						name={name}
						onChange={handleData}
					>
						{statusDreamOptions.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</select>
				)
				break
			default:
				field = (
					<input
						className="input"
						key={name}
						name={name}
						type={type}
						value={data[name]}
						placeholder={placeholder}
						onChange={handleData}
					/>
				)
				break
		}
		return field
	}

	return (
		<>
			{isLoadingData && <div className="info">Loading dream...</div>}
			{!isLoadingData && (
				<form onSubmit={onSave} className={s['dream-form']} action="#">
					{fields.map(field => createFields({ ...field }))}
					<button
						disabled={isLoading || isSuccess}
						type="submit"
						className="button"
					>
						{isNewDream
							? isLoading || isSuccess
								? 'Saving...'
								: 'Save'
							: isLoading || isSuccess
							? 'Updating...'
							: 'Update'}
					</button>
				</form>
			)}

			{isSuccess && (
				<div className="info info-success">
					{isNewDream
						? 'The dream was successfully saved!'
						: 'The dream has been successfully renewed!'}
				</div>
			)}
		</>
	)
}
