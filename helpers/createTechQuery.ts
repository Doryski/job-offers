import { ParsedUrlQuery } from 'querystring'
import createQuery from './createQuery'
import stringFormat from './stringFormat'

const createTechQuery = (tech: string, query: ParsedUrlQuery) => {
	const isActive = query.tech === stringFormat(tech)
	return createQuery(
		{ query: 'tech', value: isActive ? '' : stringFormat(tech) },
		query
	)
}

export default createTechQuery
