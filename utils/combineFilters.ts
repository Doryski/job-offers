import { Filter } from '@/types'

const combine = (filters: Filter[]): boolean =>
	filters.reduce<boolean>(
		(acc, { param, operation }) => (param ? acc && operation : acc),
		true
	)

export default combine
