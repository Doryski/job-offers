import { Filter } from '../types'
const combine = (filters: Filter[]) =>
	filters.reduce((acc, val) => {
		if (val.param) {
			acc = acc && val.op
		}
		return acc
	}, true)
export default combine
