const quickSort = (
	array: Array<any>,
	key: string,
	direction: 'asc' | 'desc' = 'asc'
) => {
	// return array without sorting if empty or has 1 item
	if (array.length < 2) {
		return array
	}

	const chosenIndex = array.length - 1
	const chosen =
		typeof array[chosenIndex] === 'string'
			? array[chosenIndex].toLowerCase()
			: array[chosenIndex]

	const a = []
	const b = []
	for (let i = 0; i < chosenIndex; i++) {
		const temp =
			typeof array[i] === 'string' ? array[i].toLowerCase() : array[i]
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
