import { useEffect } from 'react'
import useKeyPress from './useKeyPress'

type KeyOptions = {
	input: { name: string | number; type: 'key' | 'code' }[]
	action: Function
}

export default function useBoolKeyEvent(
	enterKeyOptions: KeyOptions,
	exitKeyOptions: KeyOptions
) {
	const enter = useKeyPress(enterKeyOptions.input)
	const exit = useKeyPress(exitKeyOptions.input)

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
