import { useEffect } from 'react'

// Usage:
// useDetectOutsideClick(modalRef, closeModal)
// useDetectOutsideClick(modalRef, () => setIsModalOpen(false))
export default function useDetectOutsideClick(
	ref: React.RefObject<any>,
	closeHandler: VoidFunction
): void {
	const listener = (event: MouseEvent) => {
		if (!ref.current || ref.current.contains(event.target)) return

		closeHandler()
	}
	useEffect(() => {
		document.addEventListener('mousedown', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
		}
	})
}
// export default function useDetectOutsideClick(
// 	reference: React.RefObject<any> | React.RefObject<any>[],
// 	closeFn: VoidFunction
// ): void {
// 	const detector = (ref: React.RefObject<any>, event: MouseEvent): boolean =>
// 		ref?.current?.contains(event.target)

// 	const listener = (event: MouseEvent) => {
// 		if (reference instanceof Array) {
// 			reference.forEach(el => {
// 				if (!detector(el, event)) {
// 					return closeFn()
// 				}
// 				return null
// 			})
// 		}
// 		if (detector(reference as React.RefObject<any>, event)) return
// 		closeFn()
// 	}
// 	useEffect(() => {
// 		document.addEventListener('mousedown', listener)
// 		return () => {
// 			document.removeEventListener('mousedown', listener)
// 		}
// 	})
// }
