import { SORT_OPTIONS } from './utils'
import moment from 'moment'
import { DATE_FORMAT } from './utils'
import OfferType from '../types/OfferType'
import ParamsType from '../types/ParamsType'

export default function sortOffers(offers: OfferType[], sortParam: ParamsType['sort']) {
    return [...offers].sort((a, b) => {
        if (sortParam === SORT_OPTIONS.salaryUp.id)
            return a.salaryFrom > b.salaryFrom ? 1 : -1
        if (sortParam === SORT_OPTIONS.salaryDown.id)
            return a.salaryFrom < b.salaryFrom ? 1 : -1
        return moment(a.dateAdded, DATE_FORMAT).diff(
            moment(b.dateAdded, DATE_FORMAT)
        ) < 0
            ? 1
            : -1
    })
}
