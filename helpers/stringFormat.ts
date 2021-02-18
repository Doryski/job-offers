import _ from 'lodash'

const stringFormat = (string: string) =>
	_.camelCase(string)
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')

export default stringFormat
