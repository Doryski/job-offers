import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'
import mergeArrays from './mergeArrays'
import transformQuery from './transformQuery'

<<<<<<< HEAD
export function reduceToQueryString(data: Query[]) {
	const INIT = '/?'
=======
export function reduceToQueryString(data: Query[]): string {
	const init = '/?'
>>>>>>> exp-new
	const reduced = data.reduce((acc, { query, value }, index, array) => {
		const queryInstance = query + '=' + value
		if (!value) return acc
		if (index + 1 === array.length) return (acc += queryInstance)
		if (index + 1 < array.length) return (acc += queryInstance + '&')
<<<<<<< HEAD
	}, INIT)

	if (reduced === INIT) return ''
=======
	}, init)

	if (reduced === init) return ''
>>>>>>> exp-new
	if (reduced[reduced.length - 1] === '&')
		return reduced.slice(0, reduced.length - 1)

	return reduced
}

export default function createQuery(
	data: Query[] | Query,
	prevQuery?: ParsedUrlQuery
): string {
	const transformed = transformQuery(prevQuery)
	let merged: Query[] = []
	if (!data) merged = transformed
	if (data instanceof Array) {
		merged = mergeArrays(transformed, data, 'query')
	}
	if (data instanceof Object && !(data instanceof Array)) {
		merged = mergeArrays(transformed, [data], 'query')
	}
	const reduced = reduceToQueryString(merged)
	return reduced
}
