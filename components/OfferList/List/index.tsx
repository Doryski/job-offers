import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import filterOffers from 'utils/filterOffers'
import sortOffers from 'utils/sortOffers'
import { OfferPageDataType } from '@/types'
import Center from '@/shared-components/Center'
import OfferCard from '../../OfferCard'

export const ListContainer = styled.section`
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
	const sortedOffers = sortOffers(filteredOffers, query.sort as string)

	return (
		<ListContainer>
			{sortedOffers.map((offerInfo, index) => (
				<OfferCard
					index={index}
					setCurrentOffer={setCurrentOffer}
					setShowFilters={setShowFilters}
					key={offerInfo.offerId}
					offerInfo={offerInfo}
				/>
			))}
		</ListContainer>
	)
}

export default List
