import { useState } from 'react'

export default function useCheckbox(initialState: boolean) {
	const [isChecked, setIsChecked] = useState<boolean>(initialState)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setIsChecked(event.target.checked)
	}

	return { isChecked, setIsChecked, handleChange }
}
