import { useEffect } from 'react'
import useKeyPress from './useKeyPress'

type KeyOptions = {
	input: (string | number)[]
	inputType: 'key' | 'code'
	action: Function
}

export default function useBoolKeyEvent(
	enterKeyOptions: KeyOptions,
	exitKeyOptions: KeyOptions
) {
	const enter = useKeyPress(enterKeyOptions.input, enterKeyOptions.inputType)
	const exit = useKeyPress(exitKeyOptions.input, exitKeyOptions.inputType)

	useEffect(() => {
		if (enter) {
			enterKeyOptions.action()
		}
		if (exit) {
			exitKeyOptions.action()
		}
	}, [enter, enterKeyOptions, exit, exitKeyOptions])
}

export type { KeyOptions }
