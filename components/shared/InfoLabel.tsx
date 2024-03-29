import styled from 'styled-components'
import Typography from './Typography'

type InfoLabelProps = {
	label: {
		icon: JSX.Element
		value: string | number
		feature: string
	}
}

export const Container = styled.div`
	align-items: center;
	background: ${({ theme }) => theme.colors.white};
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	border-radius: 4px;
	width: 100%;
	margin: 0.5em 0.5em;
	padding: 1.25em 0.3125em;
	&:first-of-type {
		margin-left: 0;
	}
	&:last-of-type {
		margin-right: 0;
	}
`
export const IconWrapper = styled.div`
	box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.06) 0px 1px 5px 0px;
	display: flex;
	justify-content: center;
	position: absolute;
	left: 0;
	top: 0;
	background: ${({ theme }) => theme.colors.white};
	padding: 0.5em;
`

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
