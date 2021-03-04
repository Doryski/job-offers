import { useEffect } from 'react'
import devlog from './devlog'

export type Options = { pre?: string; post?: string }

const useChangeDetect = (value: string | number, options: Options) => {
	const { pre, post } = options
	useEffect(() => {
		devlog(`${pre || ''}${value}${post || ''}`)
	}, [value])
}
export default useChangeDetect
