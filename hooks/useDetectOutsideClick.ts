import { useEffect } from 'react'

// Usage:
// useDetectOutsideClick(modalRef, closeModal)
// useDetectOutsideClick(modalRef, () => setIsModalOpen(false))
export default function useDetectOutsideClick(
	refs: React.RefObject<any>[],
	closeHandler: VoidFunction
): void {
	const listener = (event: MouseEvent) => {
		if (refs.find(ref => !ref.current || ref.current.contains(event.target)))
			return

		closeHandler()
	}

	useEffect(() => {
		document.addEventListener('mousedown', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
		}
	})
}
