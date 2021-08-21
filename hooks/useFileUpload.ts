import { useState } from 'react'
import getFileName from 'utils/getFileName'

export default function useFileUpload(
	inputFileRef: React.RefObject<HTMLInputElement>
) {
	const element = inputFileRef.current!
	const [fileName, setFileName] = useState<string>('')
	const handleFileUpload = (): void => {
		element.click()
	}
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setFileName(getFileName(e.target.value))

	// eslint-disable-next-line consistent-return
	const handleFileDelete = (): void => {
		element.value = ''
		if (!element.value) return setFileName('')

		console.warn("Couldn't delete file")
	}
	return {
		fileName,
		handleFileUpload,
		handleFileChange,
		handleFileDelete,
	}
}
