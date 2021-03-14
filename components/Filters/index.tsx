import { Close } from '@material-ui/icons'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import resetFilters from '../../helpers/resetFilters'
import ExpLvlFilter from '../ExpLvlFilter'
import LocationFilters from '../LocationFilters'
import SalaryFilter from '../SalaryFilter'
import CustomButton from '../shared/CustomButton'
import { ICON_SIZE } from '../shared/InfoLabel'
import Typography from '../shared/Typography'
import TechFilters from '../TechFilters'

const Filters = () => {
	const router = useRouter()
	const handleReset = () => {
		resetFilters(router)
	}

	return (
		<Container>
			<SubContainer>
				<FiltersHeader>
					<div>
						<Typography fontSize='1.5rem'>Filters</Typography>
					</div>
					<a onClick={handleReset}>
						<CustomButton
							display='flex'
							icon={{
								icon: <Close fontSize={ICON_SIZE} />,
								color: 'text',
								margin: '.45em 0 0 0',
							}}
							padding='0.5em 1.875em'>
							Clear filters
						</CustomButton>
					</a>
				</FiltersHeader>
				<Typography
					display='block'
					minWidth='100%'
					color='text'
					fWeight={700}
					align='left'
					margin='1.25em 0'>
					Locations
				</Typography>

				<FilterContainer>
					<LocationFilters />
				</FilterContainer>
				<Typography
					display='block'
					minWidth='100%'
					color='text'
					fWeight={700}
					align='left'
					margin='1.25em 0'>
					Technology
				</Typography>
				<FilterContainer>
					<TechFilters />
				</FilterContainer>
				<Typography
					display='block'
					minWidth='100%'
					color='text'
					fWeight={700}
					align='left'
					margin='1.25em 0'>
					Salary
				</Typography>
				<FilterContainer>
					<SalaryFilter />
				</FilterContainer>
				<Typography
					display='block'
					minWidth='100%'
					color='text'
					fWeight={700}
					align='left'
					margin='1.25em 0'>
					Seniority
				</Typography>
				<ExpLvlFilter />
			</SubContainer>
		</Container>
	)
}

export const FilterContainer = styled.div`
	margin-bottom: 1em;
	width: 100%;
`
export const Container = styled.div`
	min-height: 92vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-left: 1px solid ${({ theme }) => theme.colors.divider};
`
export const SubContainer = styled.section`
	width: 100%;
	height: 100%;
	padding: 0.5em 1.25em;
`

export const FiltersHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export default Filters
