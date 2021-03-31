import { useEffect } from 'react'

// Usage:
// useDetectOutsideClick(modalRef, closeModal)
// useDetectOutsideClick(modalRef, () => setIsModalOpen(false))
export default function useDetectOutsideClick(
	ref: React.RefObject<any> | React.RefObject<any>[],
	closeFn: VoidFunction
): void {
	const detector = (ref: React.RefObject<any>, event: MouseEvent): boolean =>
		ref?.current?.contains(event.target)

	const listener = (event: MouseEvent) => {
		if (ref instanceof Array) {
			for (let el of ref) {
				if (detector(el, event)) return
			}
			closeFn()
			return
		}
		if (detector(ref, event)) return
		closeFn()
	}
	useEffect(() => {
		document.addEventListener('mousedown', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
		}
	})
}
