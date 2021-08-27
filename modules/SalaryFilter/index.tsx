import { Slider } from '@material-ui/core'
import { useRouter } from 'next/router'
import createQuery from 'utils/createQuery'
import formatThous from 'utils/formatThous'
import { MAX_SLIDER_VALUE } from '@/utils/vars'
import { SliderType } from '@/types'
import { Typography } from '@/shared-components/Typography'
import {
	AmountContainer,
	AmountWrapper,
	SalaryWrapper,
	SliderWrapper,
	Wrapper,
} from './styled'

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
