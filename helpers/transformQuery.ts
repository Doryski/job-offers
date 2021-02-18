import { ParsedUrlQuery } from 'querystring'
import Query from '../types/Query'

const transformQuery = (query: ParsedUrlQuery) => {
	if (!query) return
	const transformed: Query[] = []
	Object.entries(query).forEach((el) => {
		return transformed.push({
			query: el[0],
			value: el[1] as string,
		})
	})
	return transformed
}
export default transformQuery
