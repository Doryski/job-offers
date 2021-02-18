import { Value } from '../components/MoreFiltersModal/DialogComponent'

const getValue = (value: Value, index: number) =>
	value instanceof Array ? value[index] : value

export default getValue
