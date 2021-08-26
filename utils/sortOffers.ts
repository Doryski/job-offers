import { ParamsType } from '@/types'
import { SORT_OPTIONS } from './vars'

type SortProps = { salaryFrom: number; dateAdded: string }

export default function sortOffers<DataType extends SortProps>(
	data: DataType[],
	sortParam: ParamsType['sort']
): DataType[] {
	if (!data.length) return []
	if (data.length < 2) return data

	return [...data].sort((a, b) => {
		switch (sortParam) {
			case SORT_OPTIONS[0].id:
				return a.salaryFrom > b.salaryFrom ? 1 : -1
			case SORT_OPTIONS[1].id:
				return a.salaryFrom < b.salaryFrom ? 1 : -1
			case SORT_OPTIONS[2].id:
			default:
				return +a.dateAdded - +b.dateAdded < 0 ? 1 : -1
		}
	})
}
