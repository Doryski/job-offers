import { ParsedUrlQuery } from 'querystring'
import createQuery from './createQuery'

export default function createTechQuery(
	tech: string,
	query: ParsedUrlQuery
): string {
	const techFormatted = tech.myNormalize()
	const isActive = query.tech === techFormatted
	const value = isActive ? '' : techFormatted
	return createQuery({ query: 'tech', value }, query)
}
