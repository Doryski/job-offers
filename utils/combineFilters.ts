import { Filter } from '@/types'

export default function combine(filters: Filter[]): boolean {
	return filters.reduce<boolean>((acc, { param, operation }) => {
		if (param) {
			acc = acc && operation
		}
		return acc
	}, true)
}
