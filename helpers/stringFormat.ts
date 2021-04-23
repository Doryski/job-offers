import _ from 'lodash'

<<<<<<< HEAD
export default function stringFormat(string: string) {
=======
export default function stringFormat(string: string): string {
>>>>>>> exp-new
	return _.camelCase(string)
		.toLocaleLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\u0142/g, 'l')
}
