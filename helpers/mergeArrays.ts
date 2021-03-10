const mergeArrays = (prevArr: Array<any>, newArr: Array<any>, by: string) => {
	return prevArr
		.filter((prevEl) => !newArr.find((newEl) => prevEl[by] === newEl[by]))
		.concat(newArr)
}

export default mergeArrays
