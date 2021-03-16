import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import devlog from '@/debug/devlog'
import timeit from '@/debug/timeit'
import filterOffers from '@/helpers/filterOffers'
import sortOffers, { sortOffers2 } from '@/helpers/sortOffers'
import { OfferPageDataType } from '@/types'
import Center from '@/components/shared/Center'
import OfferCard from '../OfferCard'

const List = ({
	data,
	setCurrentOffer,
	setShowFilters,
}: {
	data: OfferPageDataType[] | string
	setCurrentOffer: Dispatch<SetStateAction<OfferPageDataType>>
	setShowFilters: Dispatch<SetStateAction<boolean>>
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
						index={index}
						setCurrentOffer={setCurrentOffer}
						setShowFilters={setShowFilters}
						key={offerInfo.offerId}
						offerInfo={offerInfo}
					/>
				)
			})}
		</ListContainer>
	)
}
export const ListContainer = styled.div`
	display: flex;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	flex-direction: column;
	margin-right: 0.5em;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0;
	}
`

export default List
