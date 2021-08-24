import devlog from '@/debug/devlog'
import { useCallback, useEffect, useState } from 'react'
import { KeyOptions } from './useBoolKeyEvent'

export default function useKeyPress(input: KeyOptions['input']) {
	const [isPressed, setIsPressed] = useState<string | false>(false)
	const getKeyOrCode = useCallback(
		(event: KeyboardEvent, inputType: KeyOptions['input'][0]['type']) =>
			inputType === 'key' ? event.key : event.code,
		[]
	)

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			e.preventDefault()
			if (input.find(key => key.name === getKeyOrCode(e, key.type))) {
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
