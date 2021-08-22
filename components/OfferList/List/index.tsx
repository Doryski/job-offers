import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import filterOffers from 'utils/filterOffers'
import sortOffers from 'utils/sortOffers'
import { OfferPageDataType } from '@/types'
import Center from '@/shared-components/Center/styled'
import OfferCard from '../../OfferCard'
import { ListContainer } from './styled'

type ListProps = {
	data: OfferPageDataType[]
	error: string
	setCurrentOffer: Dispatch<SetStateAction<OfferPageDataType>>
	setShowFilters: Dispatch<SetStateAction<boolean>>
}

const List = ({ data, setCurrentOffer, setShowFilters, error }: ListProps) => {
	const { query } = useRouter()
	if (error) {
		return (
			<ListContainer>
				<Center>{error}</Center>
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
