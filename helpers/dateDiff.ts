import moment, { Moment } from 'moment'
import { DATE_FORMAT } from './utils'

export const convertToMoment = (
	date: Moment | string,
	format: string
): moment.Moment => (typeof date === 'string' ? moment(date, format) : date)

export default function dateDiff(
	date1: string | Moment,
	date2: string | Moment,
	format: string = DATE_FORMAT,
	unit: moment.unitOfTime.Diff = 'days'
<<<<<<< HEAD
) {
=======
): number {
>>>>>>> exp-new
	const convertedDate1 = convertToMoment(date1, format)
	const convertedDate2 = convertToMoment(date2, format)

	return convertedDate1.diff(convertedDate2, unit)
}
