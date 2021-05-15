// Reminder! Do not extend native JS objects for libraries or any code that may be used by others

declare global {
	interface String {
		myNormalize(): string
		myCapitalizeFirstLetter(): string
		myLowerFirstLetter(): string
		myCamelcase(): string
	}
}

String.prototype.myNormalize = function (): string {
	return this.valueOf()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')
}

String.prototype.myCapitalizeFirstLetter = function (): string {
	const value = this.valueOf()
	return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

String.prototype.myLowerFirstLetter = function (): string {
	const value = this.valueOf()
	return `${value.charAt(0).toLowerCase()}${value.slice(1)}`
}

String.prototype.myCamelcase = function (): string {
	const split = this.valueOf().split(' ')
	const cameled = split.map(word => word.myCapitalizeFirstLetter())
	return cameled.join('')
}
export {}
