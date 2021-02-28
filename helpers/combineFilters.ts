const f = (
	param: string | number,
	filter: boolean,
	nextParam: boolean = true
) => (!!param ? filter && nextParam : nextParam)
export default f
