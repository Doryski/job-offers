import { SORT_OPTIONS } from './utils'
import moment from 'moment'
import { DATE_FORMAT } from './utils'
import { ParamsType, OfferPageDataType } from '../types'

export default function sortOffers(
	data: OfferPageDataType[],
	sortParam: ParamsType['sort']
) {
	if (!data) return []

	return [...data].sort((a, b) => {
		if (sortParam === SORT_OPTIONS.salaryUp.id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		if (sortParam === SORT_OPTIONS.salaryDown.id)
			return a.salaryFrom < b.salaryFrom ? 1 : -1
		return moment(a.dateAdded, DATE_FORMAT).diff(
			moment(b.dateAdded, DATE_FORMAT)
		) < 0
			? 1
			: -1
	})
}
