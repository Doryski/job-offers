import { ParsedUrlQuery } from 'querystring'
import { OfferPageDataType } from '@/types'
import stringFormat from './stringFormat'
import combine from './combineFilters'

export default function filterOffers(
	data: OfferPageDataType[],
	query: ParsedUrlQuery
): OfferPageDataType[] {
	if (!data) return []
	const { location, tech, from, to, expLvl, search } = query
	const searchParams = !!search ? stringFormat(search as string) : ''
	const includesSearch = (text: string) =>
		stringFormat(text).includes(searchParams)
	return data.filter(el => {
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
			!!technology.find(({ tech }) => includesSearch(tech))

		const locationFilter = location === stringFormat(city)
		const techFilter = tech === stringFormat(offerTech)
		const fromFilter = !!from ? (+from as number) <= salaryFrom : true
		const toFilter = !!to ? (+to as number) >= salaryTo : true
		const expLvlFilter = expLvl === stringFormat(offerExplvl)

		const filters = [
			{ param: location as string, operation: locationFilter },
			{ param: tech as string, operation: techFilter },
			{ param: from as string, operation: fromFilter },
			{ param: to as string, operation: toFilter },
			{ param: expLvl as string, operation: expLvlFilter },
		]

		const applyFilter = !!search ? searchFilter : combine(filters)
		return applyFilter
	})
}
