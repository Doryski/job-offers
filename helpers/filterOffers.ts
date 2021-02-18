import stringFormat from './stringFormat'
import OfferType from '../types/OfferType'
import { ParsedUrlQuery } from 'querystring'

export const f = (
	param: string | number,
	filter: boolean,
	nextParam: boolean = true
) => (!!param ? filter && nextParam : nextParam)

export default function filterOffers(
	offers: OfferType[],
	query: ParsedUrlQuery
) {
	const { location, tech, from, to, expLvl, search } = query
	const searchParams = !!search ? stringFormat(search as string) : ''
	const includesSearch = (text: string) =>
		stringFormat(text).includes(searchParams)
	return offers.filter((offer) => {
		const {
			tech: offerTech,
			offerTitle,
			companyName,
			city,
			expLvl: offerExplvl,
			salaryFrom,
			salaryTo,
			technology,
		} = offer
		const searchFilter =
			includesSearch(offerTech) ||
			includesSearch(offerTitle) ||
			includesSearch(companyName) ||
			includesSearch(city) ||
			includesSearch(offerExplvl) ||
			includesSearch(String(salaryFrom)) ||
			includesSearch(String(salaryTo)) ||
			technology.find(({ tech }) => includesSearch(tech))

		const locationFilter = location === stringFormat(city)
		const techFilter = tech === offerTech
		const fromFilter = !!from ? (+from as number) <= salaryFrom : true
		const toFilter = !!to ? (+to as number) >= salaryTo : true
		const expLvlFilter = expLvl === stringFormat(offerExplvl)

		const combinedFilters = f(
			location as string,
			locationFilter,
			f(
				tech as string,
				techFilter,
				f(
					from as string,
					fromFilter,
					f(to as string, toFilter, f(expLvl as string, expLvlFilter))
				)
			)
		)

		const applyFilter = !!search ? searchFilter : combinedFilters
		return applyFilter
	})
}
