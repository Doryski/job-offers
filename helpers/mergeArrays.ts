export default function mergeArrays(
	prevArr: Array<any>,
	newArr: Array<any>,
	by: string
): Array<any> {
	return prevArr
		.filter(prevEl => !newArr.find(newEl => prevEl[by] === newEl[by]))
		.concat(newArr)
}
