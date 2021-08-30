import isClient from '@/utils/isClient'

/** returns -1 on server side */
export default function timeit(fn: Function): number {
	if (isClient) {
		const t0 = performance.now()
		fn()
		const t1 = performance.now()
		const diff = t1 - t0
		return diff as number
	}
	return -1
}
