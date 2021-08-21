import { ParsedUrlQuery } from 'querystring'
import { OfferPageDataType } from '@/types'
import combine from './combineFilters'

const includesSearch = (text: string, param: string): boolean =>
	text.myNormalize().includes(param)

export default function filterOffers(
	data: OfferPageDataType[],
	query: ParsedUrlQuery
): OfferPageDataType[] {
	if (!data) return []
	const { location, tech, from, to, expLvl, search } = query
	const searchParams = search ? (search as string).myNormalize() : ''

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
		const toSearch: string[] = [
			offerTech,
			title,
			companyName,
			city,
			offerExplvl,
			String(salaryFrom),
			String(salaryTo),
			...technology.map(t => t.tech),
		]
		const searchFilter = toSearch.filter(searchElem =>
			includesSearch(searchElem, searchParams)
		)
		const isFoundBySearch = searchFilter.length > 0

		const locationFilter = location === city.myNormalize()
		const techFilter = tech === offerTech.myNormalize()
		const fromFilter = from ? (+from as number) <= salaryFrom : true
		const toFilter = to ? (+to as number) >= salaryTo : true
		const expLvlFilter = expLvl === offerExplvl.myNormalize()

		const filters = [
			{ param: search as string, operation: isFoundBySearch },
			{ param: location as string, operation: locationFilter },
			{ param: tech as string, operation: techFilter },
			{ param: from as string, operation: fromFilter },
			{ param: to as string, operation: toFilter },
			{ param: expLvl as string, operation: expLvlFilter },
		]

		return combine(filters)
	})
}
