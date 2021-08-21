import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'

export default function transformQuery(query: ParsedUrlQuery): Query[] {
	if (!query) return []
	const transformed = Object.entries(query).map(([key, value]) => ({
		query: key,
		value: value as string,
	}))
	return transformed
}
