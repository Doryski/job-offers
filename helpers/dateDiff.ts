import moment, { Moment } from 'moment'
import { DATE_FORMAT } from './utils'

const dateDiff = (
	date1: string | Moment,
	date2: string | Moment,
	format: string = DATE_FORMAT,
	unit: moment.unitOfTime.Diff = 'days'
) => {
	const convertToMoment = (date: Moment | string) =>
		typeof date === 'string' ? moment(date, format) : date
	const convertedD1 = convertToMoment(date1)
	const convertedD2 = convertToMoment(date2)

	return convertedD1.diff(convertedD2, unit)
}

export default dateDiff
