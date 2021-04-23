import { ParsedUrlQuery } from 'querystring'
import createQuery from './createQuery'
import stringFormat from './stringFormat'

<<<<<<< HEAD
export default function createTechQuery(tech: string, query: ParsedUrlQuery) {
=======
export default function createTechQuery(
	tech: string,
	query: ParsedUrlQuery
): string {
>>>>>>> exp-new
	const techFormatted = stringFormat(tech)
	const isActive = query.tech === techFormatted
	const value = isActive ? '' : techFormatted
	return createQuery({ query: 'tech', value }, query)
}
