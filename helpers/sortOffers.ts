import { SORT_OPTIONS } from './utils'
import { ParamsType, OfferPageDataType } from '../types'
import quickSort from './quickSort'

export default function sortOffers(
	data: OfferPageDataType[],
	sortParam: ParamsType['sort']
) {
	if (!data) return []
	if (data.length < 2) {
		return data
	}
	return [...data].sort((a, b) => {
		if (sortParam === SORT_OPTIONS[0].id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		if (sortParam === SORT_OPTIONS[1].id)
			return a.salaryFrom < b.salaryFrom ? 1 : -1
		return +a.dateAdded - +b.dateAdded < 0 ? 1 : -1
	})
}

export function sortOffers2(
	data: OfferPageDataType[],
	sortParam: ParamsType['sort']
) {
	if (!data) return []

	if (!sortParam) return quickSort(data, 'dateAdded', 'desc')
	if (sortParam === SORT_OPTIONS[0].id)
		return quickSort(data, 'salaryFrom', 'asc')
	if (sortParam === SORT_OPTIONS[1].id)
		return quickSort(data, 'salaryFrom', 'desc')
}
