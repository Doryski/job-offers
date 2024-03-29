import { ParamsType } from '@/types'
import { SORT_OPTIONS } from './utils'

type SortProps = { salaryFrom: number; dateAdded: string }

export default function sortOffers<DataType extends SortProps>(
	data: DataType[],
	sortParam: ParamsType['sort']
): DataType[] {
	if (!data) return []
	if (data.length < 2) return data

	const sorted = [...data].sort((a, b) => {
		if (sortParam === SORT_OPTIONS[0].id)
			return a.salaryFrom > b.salaryFrom ? 1 : -1
		if (sortParam === SORT_OPTIONS[1].id)
			return a.salaryFrom < b.salaryFrom ? 1 : -1
		return +a.dateAdded - +b.dateAdded < 0 ? 1 : -1
	})
	return sorted
}
