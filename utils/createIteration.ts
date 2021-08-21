const createIteration = (length: number, startFrom: number = 0): number[] =>
	Array.from(Array(length), (_, i) => i + startFrom)
export default createIteration
