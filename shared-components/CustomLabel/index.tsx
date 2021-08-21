import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { Typography } from '../Typography'
import { IconWrapper, Wrapper } from './styled'

type CustomLabelProps = {
	label: string
	type: 'business' | 'location'
}

const CustomLabel = ({ label, type }: CustomLabelProps) => (
	<Wrapper>
		<IconWrapper>
			{type === 'business' && <BusinessIcon />}
			{type === 'location' && <LocationOnIcon />}
		</IconWrapper>
		<Typography color='span' fontSize='small' fWeight={400}>
			{label}
		</Typography>
	</Wrapper>
)

export default CustomLabel
