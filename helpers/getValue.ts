import { Value } from '../components/MoreFilters'

const getValue = (value: Value, index: number) =>
	value instanceof Array ? value[index] : value

export default getValue
