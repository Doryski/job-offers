import Typography from '../shared/Typography'
import CustomButton from '../shared/CustomButton'
import { EXP_LVL_OPTIONS } from '../../helpers/utils'
import { Wrapper } from './StyledComponents'
import theme, { textColors } from '../../theme'

const SenioritySection = ({
	expLvl,
	setExpLvl,
}: {
	expLvl?: string | null
	setExpLvl: React.Dispatch<React.SetStateAction<string | null>>
}) => {
	return (
		<>
			<Typography
				align='flex-start'
				color={textColors.text}
				fWeight={theme.fontWeight[700]}
				margin='0 0 1em 0'>
				Seniority
			</Typography>
			<Wrapper>
				<CustomButton
					handleClick={() => setExpLvl(null)}
					active={!expLvl}
					padding='0.375em 2.5em'
					margin='0.375em 0.375em 0.375em 0'>
					All
				</CustomButton>
				{EXP_LVL_OPTIONS.map((lvl) => (
					<CustomButton
						handleClick={() => setExpLvl(lvl)}
						active={lvl === expLvl}
						padding='0.375em 2.5em'
						margin='0.375em'
						key={lvl}>
						{lvl}
					</CustomButton>
				))}
			</Wrapper>
		</>
	)
}

export default SenioritySection
