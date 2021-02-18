const mergeArrays = (prevArr: Array<any>, newArr: Array<any>, by: string) =>
	prevArr
		.filter((prevEl) => !newArr.find((newEl) => prevEl[by] === newEl[by]))
		.concat(newArr)

export default mergeArrays
