import { TECH_LVL_OPTIONS } from '@/utils/vars'
import { Typography } from '../Typography'
import { Container, RangeContainer, RangePoint } from './styled'

type TechRangeProps = { range: number; tech: string }

const TechRange = ({ range, tech }: TechRangeProps) => {
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
