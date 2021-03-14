import { NextRouter } from 'next/router'
import createQuery from './createQuery'

const resetFilters = (router: NextRouter) => {
	const resetQuery = ['location', 'expLvl', 'from', 'to', 'tech'].map((el) => ({
		query: el,
		value: '',
	}))

	router.push(createQuery(resetQuery, router.query), undefined, {
		shallow: true,
	})
}
export default resetFilters
