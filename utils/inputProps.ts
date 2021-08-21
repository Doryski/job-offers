type CommonInputProps = {
	name: string
	label: string
	required: boolean
}
const inputProps = (
	label: string,
	name?: string,
	required: boolean = true
): CommonInputProps => ({
	name: name || label.myCamelcase().myLowerFirstLetter(),
	label,
	required,
})

export default inputProps
