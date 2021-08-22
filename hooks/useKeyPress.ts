import devlog from '@/debug/devlog'
import { useCallback, useEffect, useState } from 'react'

export default function useKeyPress(
	input: (string | number)[],
	inputType: 'key' | 'code'
) {
	const [isPressed, setIsPressed] = useState<string | false>(false)
	const getKeyOrCode = useCallback(
		(event: KeyboardEvent) => (inputType === 'key' ? event.key : event.code),
		[inputType]
	)

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			if (input.includes(getKeyOrCode(e))) {
				e.preventDefault()
				devlog(`${e.code} (${e.key}) key was pressed.`)
				setIsPressed(e.code)
			}
		}
		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
			setIsPressed(false)
		}
	}, [getKeyOrCode, input])

	return isPressed
}
