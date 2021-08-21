// Reminder! Do not extend native JS objects for libraries or any code that may be used by others

declare global {
	interface Array<T> {
		mySort(by: keyof T, direction?: 'asc' | 'desc'): this
	}
}

Array.prototype.mySort = function <T>(
	by: keyof T,
	direction: 'asc' | 'desc' = 'desc'
) {
	if (direction === 'asc')
		return [...this].sort((a, b) => (a[by] > b[by] ? 1 : -1))
	return [...this].sort((a, b) => (a[by] < b[by] ? 1 : -1))
}

export {}
