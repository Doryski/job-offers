import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'

const transformQuery = (query: ParsedUrlQuery) => {
	const transformed: Query[] = []
	if (!query) return transformed
	Object.entries(query).forEach((el) => {
		return transformed.push({
			query: el[0],
			value: el[1] as string,
		})
	})
	return transformed
}
export default transformQuery
