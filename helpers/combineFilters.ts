import { Filter } from '@/types'

export default function combine(filters: Filter[]) {
	return filters.reduce((acc, { param, operation }) => {
		if (param) {
			acc = acc && operation
		}
		return acc
	}, true)
}
