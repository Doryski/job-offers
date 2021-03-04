import stringFormat from './stringFormat'
import { ParsedUrlQuery } from 'querystring'
import { OfferPageDataType } from '../types'
import combine from './combineFilters'

export default function filterOffers(
	data: OfferPageDataType[],
	query: ParsedUrlQuery
) {
	if (!data) return []
	const { location, tech, from, to, expLvl, search } = query
	const searchParams = !!search ? stringFormat(search as string) : ''
	const includesSearch = (text: string) =>
		stringFormat(text).includes(searchParams)
	return data.filter((el) => {
		const {
			tech: offerTech,
			title,
			expLvl: offerExplvl,
			salaryFrom,
			salaryTo,
			technology,
			companyName,
			city,
		} = el
		const searchFilter =
			includesSearch(offerTech) ||
			includesSearch(title) ||
			includesSearch(companyName) ||
			includesSearch(city) ||
			includesSearch(offerExplvl) ||
			includesSearch(String(salaryFrom)) ||
			includesSearch(String(salaryTo)) ||
			JSON.parse(technology).find(({ tech }) => includesSearch(tech))

		const locationFilter = location === stringFormat(city)
		const techFilter = tech === stringFormat(offerTech)
		const fromFilter = !!from ? (+from as number) <= salaryFrom : true
		const toFilter = !!to ? (+to as number) >= salaryTo : true
		const expLvlFilter = expLvl === stringFormat(offerExplvl)

		const filters = [
			{ param: location as string, op: locationFilter },
			{ param: tech as string, op: techFilter },
			{ param: from as string, op: fromFilter },
			{ param: to as string, op: toFilter },
			{ param: expLvl as string, op: expLvlFilter },
		]

		const applyFilter = !!search ? searchFilter : combine(filters)
		return applyFilter
	})
}
