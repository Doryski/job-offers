import Typography from '../shared/Typography'
import CustomButton from '../shared/CustomButton'
import { EXP_LVL_OPTIONS } from '../../helpers/utils'
import { Wrapper } from './StyledComponents'
import theme, { textColors } from '../../theme'
import stringFormat from '../../helpers/stringFormat'

const SenioritySection = ({
	expLvl,
	setExpLvl,
}: {
	expLvl?: string
	setExpLvl: React.Dispatch<React.SetStateAction<string>>
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
					handleClick={() => setExpLvl('')}
					active={!expLvl}
					padding='0.375em 2.5em'
					margin='0.375em 0.375em 0.375em 0'>
					All
				</CustomButton>
				{EXP_LVL_OPTIONS.map((lvl) => (
					<CustomButton
						handleClick={() => setExpLvl(stringFormat(lvl))}
						active={stringFormat(lvl) === expLvl}
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
