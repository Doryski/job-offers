import { ParsedUrlQuery } from 'querystring'
import { Query } from '../types'
import devlog from './devlog'
import mergeArrays from './mergeArrays'
import transformQuery from './transformQuery'

export function reduceToQueryString(data: Array<any>) {
	const reduced = data.reduce((acc, val, index) => {
		const { query, value } = val
		const queryInstance = query + '=' + value
		if (!value) return acc
		if (index + 1 === data.length) return (acc += queryInstance)
		if (index + 1 < data.length) return (acc += queryInstance + '&')
	}, '/?')

	if (reduced === '/?') return ''
	if (reduced[reduced.length - 1] === '&')
		return reduced.slice(0, reduced.length - 1)

	return reduced
}

const createQuery = (data: Query[] | Query, prevQuery?: ParsedUrlQuery) => {
	// devlog('creating query...')
	// devlog('data:', data)
	// devlog('prevQuery:', prevQuery)
	const transformed = transformQuery(prevQuery)
	let merged: Query[] = []
	if (!data) merged = transformed
	if (data instanceof Array) {
		merged = mergeArrays(transformed, data, 'query')
	}
	if (data instanceof Object && !(data instanceof Array)) {
		merged = mergeArrays(transformed, [data], 'query')
	}
	// devlog('arrays merged:', merged)
	const reduced = reduceToQueryString(merged)
	return reduced
}

export default createQuery
