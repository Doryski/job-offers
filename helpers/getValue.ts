import { Value } from '../components/MoreFiltersModal/MoreFilters'

const getValue = (value: Value, index: number) =>
	value instanceof Array ? value[index] : value

export default getValue
