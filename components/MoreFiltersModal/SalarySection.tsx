import Typography from '../shared/Typography'
import formatThous from '../../helpers/formatThous'
import { Wrapper } from './StyledComponents'
import styled from 'styled-components'
import theme, { textColors } from '../../theme'
import { MAX_SLIDER_VALUE } from '../../helpers/utils'
import getValue from '../../helpers/getValue'
import { Value } from './MoreFilters'

const SalarySection = ({
	value,
	children,
}: {
	value: Value
	children: React.ReactNode
}) => {
	const from = getValue(value, 0)
	const to = getValue(value, 1)

	return (
		<>
			<Typography
				color={textColors.text}
				fWeight={theme.fontWeight[700]}
				align='flex-start'
				margin='0 0 1em 0'>
				Salary expectations?
			</Typography>
			<Wrapper>
				<SliderWrapper>{children}</SliderWrapper>
				<AmountContainer>
					<AmountWrapper>
						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[600]}
							fontSize={theme.fontSize.sm}
							align='flex-start'>
							Min. amount
						</Typography>

						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[400]}
							align='flex-start'>
							{`${!from ? '0' : formatThous(from)} PLN`}
						</Typography>
					</AmountWrapper>
					<Typography as='div' color={textColors.text} padding='0 0.375em'>
						—
					</Typography>
					<AmountWrapper>
						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[600]}
							fontSize={theme.fontSize.sm}
							align='flex-start'>
							Max. amount
						</Typography>

						<Typography
							color={textColors.text}
							fWeight={theme.fontWeight[400]}
							align='flex-start'>
							{to === MAX_SLIDER_VALUE
								? `${formatThous(MAX_SLIDER_VALUE)}+ PLN`
								: `${formatThous(to)} PLN`}
						</Typography>
					</AmountWrapper>
				</AmountContainer>
			</Wrapper>
		</>
	)
}

export const SliderWrapper = styled.div`
	padding: 0 0.375em;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export const AmountContainer = styled.div`
	margin-top: 0.25em;
	width: 100%;
	display: flex;
	align-items: center;
`
export const AmountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1 1 0%;
	padding: 0.375em 1.5em;
	border-radius: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.buttonBorder};
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em;
	}
`

export default SalarySection
