import { ParsedUrlQuery } from 'querystring'
import createQuery from './createQuery'
import stringFormat from './stringFormat'

export default function createTechQuery(
	tech: string,
	query: ParsedUrlQuery
): string {
	const techFormatted = stringFormat(tech)
	const isActive = query.tech === techFormatted
	const value = isActive ? '' : techFormatted
	return createQuery({ query: 'tech', value }, query)
}
