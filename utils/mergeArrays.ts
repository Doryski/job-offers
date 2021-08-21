export default function mergeArrays<
	PrevArrType,
	NewArrType extends PrevArrType,
	KeyType extends keyof PrevArrType
>(prevArr: PrevArrType[], newArr: NewArrType[], by: KeyType): PrevArrType[] {
	return prevArr
		.filter(prevEl => !newArr.find(newEl => prevEl[by] === newEl[by]))
		.concat(newArr)
}
