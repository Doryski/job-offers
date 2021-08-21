import createIteration from '@/utils/createIteration'
import { TECH_LVL_OPTIONS } from '@/utils/vars'
import { Typography } from '../Typography'
import { Container, RangeContainer, RangePoint } from './styled'

type TechRangeProps = { range: number; tech: string }

const TechRange = ({ range, tech }: TechRangeProps) => {
	const rangeColor =
		(range < 2 && 'hsl(120, 54%, 59%)') ||
		(range > 3 ? 'hsl(39, 86%, 58%)' : 'hsl(60, 87%, 54%)')

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
				{createIteration(range).map(index => (
					<RangePoint key={index} color={rangeColor} />
				))}
				{createIteration(5 - range).map(index => (
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
