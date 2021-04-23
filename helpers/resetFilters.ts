import { NextRouter } from 'next/router'
import createQuery from './createQuery'
import { FILTER_NAMES } from './utils'

<<<<<<< HEAD
const resetFilters = (router: NextRouter) => {
=======
const resetFilters = (router: NextRouter): void => {
>>>>>>> exp-new
	const resetQuery = FILTER_NAMES.map(el => ({
		query: el,
		value: '',
	}))
	const newUrl = createQuery(resetQuery, router.query)
	router.push(newUrl, undefined, { shallow: true })
}
export default resetFilters
