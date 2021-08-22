import { Typography } from '@/shared-components/Typography'
import { Wrapper } from '../styled'
import { DescriptionContainer, DescriptionContent } from './styled'

type OfferDescriptionProps = { description: string }

const OfferDescription = ({ description }: OfferDescriptionProps) => (
	<DescriptionContainer>
		<Typography
			color='title'
			fWeight={500}
			fontSize='xl'
			align='left'
			margin='0.625em 1.25em'>
			Description
		</Typography>

		<Wrapper>
			<DescriptionContent>{description}</DescriptionContent>
		</Wrapper>
	</DescriptionContainer>
)

export default OfferDescription
