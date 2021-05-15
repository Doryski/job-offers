import { useState } from 'react'

export default function useDialogHandler(initialState: boolean) {
	const [isOpen, setIsOpen] = useState<boolean>(initialState)

	return {
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
		toggle: () => setIsOpen(prev => !prev),
		isOpen,
	}
}
