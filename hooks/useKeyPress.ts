import { useCallback, useEffect, useState } from 'react'
import { KeyOptions } from './useBoolKeyEvent'

export default function useKeyPress(input: KeyOptions['input']) {
	const [isPressed, setIsPressed] = useState<string | false>(false)

	const getKeyOrCode = useCallback(
		(event: KeyboardEvent, inputType: KeyOptions['input'][0]['type']) =>
			inputType === 'key' ? event.key : event.code,
		[]
	)

	const listener = useCallback(
		(e: KeyboardEvent) => {
			if (input.find(key => key.name === getKeyOrCode(e, key.type))) {
				e.preventDefault()
				setIsPressed(e.code)
			}
		},
		[getKeyOrCode, input]
	)

	useEffect(() => {
		document.addEventListener('keydown', listener)
		return () => {
			document.removeEventListener('keydown', listener)
			setIsPressed(false)
		}
	}, [getKeyOrCode, input, listener])

	return isPressed
}
