import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import devlog from '../../debug/devlog'
import timeit from '../../debug/timeit'
import filterOffers from '../../helpers/filterOffers'
import sortOffers, { sortOffers2 } from '../../helpers/sortOffers'
import { OfferPageDataType } from '../../types'
import OfferCard from '../OfferCard'
import Center from '../shared/Center'

const List = ({
	data,
	setCurrentOffer,
}: {
	data: OfferPageDataType[] | string
	setCurrentOffer: Dispatch<SetStateAction<OfferPageDataType>>
}) => {
	const { query } = useRouter()
	if (typeof data === 'string') {
		return (
			<ListContainer>
				<Center>{data}</Center>
			</ListContainer>
		)
	}
	const filteredOffers = filterOffers(data, query)
	devlog('sortOffers: ')
	const d1 = timeit(
		() => sortOffers(filteredOffers, query.sort as string),
		true
	)
	devlog('sortOffers2: ')
	const d2 = timeit(
		() => sortOffers2(filteredOffers, query.sort as string),
		true
	)
	devlog('winner: ', d2 < d1 ? 'sortOffers2' : 'sortOffers')
	const sortedOffers = sortOffers(filteredOffers, query.sort as string)

	return (
		<ListContainer>
			{sortedOffers.map((offerInfo, index) => {
				return (
					<OfferCard
						setCurrentOffer={setCurrentOffer}
						key={offerInfo.offerId}
						offerInfo={offerInfo}
						index={index}
					/>
				)
			})}
		</ListContainer>
	)
}
export const ListContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	overflow: auto;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0;
	}
`

export default List
