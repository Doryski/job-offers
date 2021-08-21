import styled from 'styled-components'
import { TECH_LVL_OPTIONS } from '@/utils/vars'
import Typography from '../Typography'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 20%;
	flex: 0 0 20%;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		max-width: 50%;
		flex: 1 0 50%;
	}
`
export const RangeContainer = styled.div`
	display: flex;
	margin: 0.5em 0 0.25em;
`
export const RangePoint = styled.span<{
	disabled?: boolean
	color?: string
}>`
	background-color: ${({ disabled, color }) =>
		disabled ? 'rgb(245, 245, 245)' : color};
	display: block;
	width: 15px;
	height: 10px;
	border-radius: 1px;
	margin: 0 0.05em 0 0;
`

const TechRange = ({ range, tech }: { range: number; tech: string }) => {
	const rangeColor =
		range < 2
			? 'rgb(92, 207, 92)'
			: range > 3
			? 'rgb(240, 175, 56)'
			: 'rgb(240, 240, 38)'

	return (
		<Container>
			<Typography
				color='title'
				fWeight={600}
				fontSize='large'
				align='left'
				hide>
				{tech}
			</Typography>
			<RangeContainer>
				{[...Array(range)].map((_, index) => (
					<RangePoint key={index} color={rangeColor} />
				))}
				{[...Array(5 - range)].map((_, index) => (
					<RangePoint key={index} disabled />
				))}
			</RangeContainer>
			<Typography color='span' fWeight={400} align='left' margin='0'>
				{TECH_LVL_OPTIONS[range - 1].title.toLowerCase()}
			</Typography>
		</Container>
	)
}

export default TechRange
