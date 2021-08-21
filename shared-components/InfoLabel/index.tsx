import { Typography } from '../Typography'
import { Container, IconWrapper } from './styled'

type InfoLabelProps = {
	label: {
		icon: JSX.Element
		value: string | number
		feature: string
	}
}
const InfoLabel = ({ label }: InfoLabelProps) => (
	<Container>
		<IconWrapper>{label.icon}</IconWrapper>
		<Typography color='title' fontSize='large' fWeight={400}>
			{label.value}
		</Typography>
		<Typography color='span' fontSize='sm' fWeight={400} margin='0.1875em 0'>
			{label.feature}
		</Typography>
	</Container>
)

export default InfoLabel
