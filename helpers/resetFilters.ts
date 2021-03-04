import { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import createQuery from './createQuery'

const resetFilters = (query: ParsedUrlQuery, router: NextRouter) => {
	const resetQuery = ['location', 'expLvl', 'from', 'to', 'tech'].map((el) => ({
		query: el,
		value: '',
	}))

	router.push(createQuery(resetQuery, query), undefined, { shallow: true })
}
export default resetFilters
