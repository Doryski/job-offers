import styled from 'styled-components'
import BusinessIcon from '@material-ui/icons/Business'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Typography from './Typography'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 0.3125em;
`

export const IconWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.colors.span};
	margin-right: 0.25em;
	margin-top: -0.1em;
	svg {
		font-size: 0.9rem;
	}
`

const CustomLabel = ({
	label,
	type,
}: {
	label: string
	type: 'business' | 'location'
}) => (
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
