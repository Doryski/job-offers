import { OfferPageDataType } from '@/types'
import OfferHeader from './OfferHeader'
import OfferTechStack from './OfferTechStack'
import OfferApplySection from './OfferApplySection'
import OfferDescription from './OfferDescription'
import { OfferContainer } from './styled'

const OfferPage = ({ offer }: { offer: OfferPageDataType }) => (
	<OfferContainer>
		<OfferHeader offer={offer} />
		<OfferTechStack technology={offer.technology} />
		<OfferDescription description={offer.description} />
		<OfferApplySection offer={offer} />
	</OfferContainer>
)

export default OfferPage
