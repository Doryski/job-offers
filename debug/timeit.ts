import devlog from './devlog'

export default function timeit(fn: Function, log: boolean = false) {
	if (typeof window !== 'undefined') {
		const t0 = performance.now()
		fn()
		const t1 = performance.now()
		const diff = t1 - t0
		if (log) return devlog(diff)
		return diff
	}
}
