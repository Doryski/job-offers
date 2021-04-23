import _ from 'lodash'

export default function stringFormat(string: string): string {
	return _.camelCase(string)
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')
}
