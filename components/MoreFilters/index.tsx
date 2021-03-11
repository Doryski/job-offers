import { Slider } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import createQuery from '../../helpers/createQuery'
import formatThous from '../../helpers/formatThous'
import getValue from '../../helpers/getValue'
import stringFormat from '../../helpers/stringFormat'
import { EXP_LVL_OPTIONS, MAX_SLIDER_VALUE } from '../../helpers/utils'
import theme, { textColors } from '../../theme'
import { Query } from '../../types'
import CustomButton from '../shared/CustomButton'
import Typography from '../shared/Typography'
export type Value = number | number[]

// const handleOpen = () => {
// 	setExpLvl(query.expLvl as string)
// 	setValue([+query.from, +query.to])
// }

const MoreFilters = () => {
	const [expLvl, setExpLvl] = useState('')
	const [value, setValue] = useState<Value>([0, 50000])
	const router = useRouter()
	const { query } = router
	const [mfQuery, setMfQuery] = useState('')
	const handleChange = (_: React.ChangeEvent<{}>, newValue: Value) =>
		setValue(newValue as number[])

	const fromValue = getValue(value, 0)
	const from = !fromValue ? '' : fromValue.toString()
	const toValue = getValue(value, 1)
	const to = toValue === MAX_SLIDER_VALUE || !toValue ? '' : toValue.toString()
	useEffect(() => {
		const moreFiltersData: Query[] = [
			{ query: 'expLvl', value: stringFormat(expLvl) },
			{ query: 'from', value: from },
			{ query: 'to', value: to },
		]
		const path = createQuery(moreFiltersData, query)
		setMfQuery(path)
	}, [from, to, expLvl])
	useEffect(() => {
		const fromVal = query.from ? from : 0
		const toVal = query.to ? to : 50000
		setValue([+fromVal, +toVal])
	}, [query.from, query.to])

	const handleApplyFilter = () => {
		router.push(mfQuery, undefined, { shallow: true })
	}
	const fromVal = getValue(value, 0)
	const toVal = getValue(value, 1)
	return (
		<>
			<Container>
				<MainWrapper>
					<Typography
						color={textColors.text}
						fWeight={theme.fontWeight[700]}
						align='flex-start'
						margin='0 0 1em 0'>
						Salary expectations?
					</Typography>
					<Wrapper>
						<SliderWrapper>
							<Slider
								value={value}
								onChange={handleChange}
								max={MAX_SLIDER_VALUE}
								step={1000}
								color='secondary'
							/>
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
										{`${!fromVal ? '0' : formatThous(fromVal)} PLN`}
									</Typography>
								</AmountWrapper>
								<Typography
									as='div'
									color={textColors.text}
									padding='0 0.375em'>
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
										{toVal === MAX_SLIDER_VALUE
											? `${formatThous(MAX_SLIDER_VALUE)}+ PLN`
											: `${formatThous(toVal)} PLN`}
									</Typography>
								</AmountWrapper>
							</AmountContainer>
						</SliderWrapper>
					</Wrapper>
					<HorizontalLine />
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
				</MainWrapper>
			</Container>
		</>
	)
}

export const Container = styled.div`
	height: 100%;
	width: 100%;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`
export const MainWrapper = styled.div`
	padding: 1em 1.5em;
	border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`

export const HorizontalLine = styled.hr`
	margin: 1.5em 0 1em;
	border: none;
	height: 1px;
	background: ${({ theme }) => theme.colors.divider};
`

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
	background: ${({ theme }) => theme.colors.primary};

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

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export default MoreFilters
