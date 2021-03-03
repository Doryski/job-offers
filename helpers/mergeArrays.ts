import devlog from './devlog'

const mergeArrays = (prevArr: Array<any>, newArr: Array<any>, by: string) => {
	devlog('merging arrays...')
	devlog('prevArr:', prevArr)
	devlog('newArr:', newArr)
	return prevArr
		.filter((prevEl) => !newArr.find((newEl) => prevEl[by] === newEl[by]))
		.concat(newArr)
}

export default mergeArrays
