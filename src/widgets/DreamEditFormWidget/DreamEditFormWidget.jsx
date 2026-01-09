import { DreamForm } from '@/features/dreams/dream-form/ui/DreamForm'
import {
	initDataDream,
	skeletonDataDreamFields,
} from '@/features/dreams/dream-form/model/options'
import { useDreamForm } from '@/features/dreams/dream-form/model/useDreamForm'
import { useAddDream } from '@/features/dreams/add-dream/model/useAddDream'
import { useEditDream } from '@/features/dreams/edit-dream'

export function DreamEditFormWidget({ dreamId }) {
	const isNewDream = dreamId === undefined
	const { dataDreamFrom, handleDataDreamForm } = useDreamForm(initDataDream)
	const {
		dataDreamEdit,
		handleDataDreamEdit,
		updateDream,
		isUpdatingDream,
		isUpdatedDream,
		isLoadingDream,
	} = useEditDream(dreamId)
	const { addDream, isAddingDream, isSuccessAddDream } = useAddDream()

	const onSave = e => {
		e.preventDefault()
		if (isNewDream) addDream(dataDreamFrom)
		else updateDream(dataDreamEdit)
	}

	const handleData = isNewDream ? handleDataDreamForm : handleDataDreamEdit
	const dataForm = isNewDream ? dataDreamFrom : dataDreamEdit
	const isLoading = isNewDream ? isAddingDream : isUpdatingDream
	const isSuccess = isNewDream ? isSuccessAddDream : isUpdatedDream

	return (
		<DreamForm
			isNewDream={isNewDream}
			data={dataForm}
			fields={skeletonDataDreamFields}
			isLoading={isLoading}
			isSuccess={isSuccess}
			isLoadingData={isLoadingDream}
			handleData={handleData}
			onSave={onSave}
		/>
	)
}
