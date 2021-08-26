import { ParsedUrlQuery } from 'querystring'
import { Query } from '@/types'

const transformQuery = (query: ParsedUrlQuery): Query[] =>
	!query
		? []
		: Object.entries(query).map(([key, value]) => ({
				query: key,
				value: value as string,
		  }))

export default transformQuery
