import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'
import mergeArrays from './mergeArrays'
import transformQuery from './transformQuery'

function reduceToQueryString(data: Query[]): string {
	const INIT: string = '/?'
	const reduced = data.reduce<string>(
		(acc, val: Query, index, array: Query[]) => {
			const { query, value } = val
			if (!value) return acc

			const queryInstance = `${query}=${value}`
			if (index + 1 === array.length) return acc + queryInstance
			if (index + 1 < array.length) return `${acc}${queryInstance}&`
			return acc
		},
		INIT
	)

	if (reduced === INIT) return ''
	if (reduced[reduced.length - 1] === '&') return reduced.slice(0, -1)

	return reduced
}

function createQuery(
	data: Query[] | Query,
	prevQuery?: ParsedUrlQuery
): string {
	const transformed = transformQuery(prevQuery!)
	let merged: Query[] = []
	if (!data) merged = transformed
	if (data instanceof Array) {
		merged = mergeArrays(transformed, data, 'query')
	}
	if (data instanceof Object && !(data instanceof Array)) {
		merged = mergeArrays(transformed, [data], 'query')
	}

	return reduceToQueryString(merged)
}

export { reduceToQueryString }
export default createQuery
