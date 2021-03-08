import stringFormat from './stringFormat'

const quickSort = (
	array: Array<any>,
	key: string,
	direction: 'asc' | 'desc'
) => {
	if (array.length < 2) {
		return array
	}

	const chosenIndex = array.length - 1
	const chosen =
		typeof array[chosenIndex] === 'string'
			? stringFormat(array[chosenIndex])
			: array[chosenIndex]

	const a = []
	const b = []
	for (let i = 0; i < chosenIndex; i++) {
		const temp =
			typeof array[i] === 'string' ? stringFormat(array[i]) : array[i]
		if (direction === 'asc') {
			temp[key] < chosen[key] ? a.push(temp) : b.push(temp)
		} else {
			temp[key] > chosen[key] ? a.push(temp) : b.push(temp)
		}
	}
	const output = [
		...quickSort(a, key, direction),
		chosen,
		...quickSort(b, key, direction),
	]
	return output
}

export default quickSort
