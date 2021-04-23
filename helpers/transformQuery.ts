import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'

export default function transformQuery(query: ParsedUrlQuery): Query[] {
	const transformed: Query[] = []
	if (!query) return transformed
	Object.entries(query).forEach(([key, value]) => {
		return transformed.push({
			query: key,
			value: value as string,
		})
	})
	return transformed
}
