import { Slider } from '@material-ui/core'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import createQuery from '@/helpers/createQuery'
import formatThous from '@/helpers/formatThous'
import { MAX_SLIDER_VALUE } from '@/helpers/utils'
import { SliderType } from '@/types'
import Typography from '@/components/shared/Typography'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`

export const SalaryWrapper = styled.section`
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
export const AmountWrapper = styled.section`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.colors.white};
	padding: 0.375em 1em;
	border-radius: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.buttonBorder};
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em 0.625em;
	}
`

export const SliderWrapper = styled.section`
	width: 50%;
	margin: 0 auto;
`

const SalaryFilter = () => {
	const router = useRouter()
	const { query } = router
	const salary = [
		query.from ? +query.from : 0,
		!query.to || query.to === '0' ? MAX_SLIDER_VALUE : +query.to,
	]
	const createSalaryQuery = (values: SliderType) => {
		const [from, to] = values
		const salaryData = [
			{ query: 'from', value: from === 0 ? '' : from.toString() },
			{ query: 'to', value: to === MAX_SLIDER_VALUE ? '' : to.toString() },
		]
		return createQuery(salaryData, query)
	}
	const handleChange = (
		_: React.ChangeEvent<{}>,
		newValues: number | number[]
	) => {
		router.push(createSalaryQuery(newValues as SliderType), undefined, {
			shallow: true,
		})
	}
	const minAmount = `${!query.from ? '0' : formatThous(+query.from)} PLN`

	const maxAmount =
		!query.to || +query.to === MAX_SLIDER_VALUE
			? `${formatThous(MAX_SLIDER_VALUE)}+ PLN`
			: `${formatThous(+query.to)} PLN`

	return (
		<Wrapper>
			<SalaryWrapper>
				<AmountContainer>
					<AmountWrapper>
						<Typography color='text' fWeight={400} align='left'>
							{minAmount}
						</Typography>

						<Typography color='text' fWeight={600} fontSize='sm' align='left'>
							Min. amount
						</Typography>
					</AmountWrapper>
					<SliderWrapper>
						<Slider
							value={salary}
							onChange={handleChange}
							max={MAX_SLIDER_VALUE}
							step={1000}
							color='primary'
						/>
					</SliderWrapper>
					<AmountWrapper>
						<Typography color='text' fWeight={400} align='left'>
							{maxAmount}
						</Typography>

						<Typography color='text' fWeight={600} fontSize='sm' align='left'>
							Max. amount
						</Typography>
					</AmountWrapper>
				</AmountContainer>
			</SalaryWrapper>
		</Wrapper>
	)
}

export default SalaryFilter
