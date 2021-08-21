import { Close } from '@material-ui/icons'
import { useRouter } from 'next/router'
import resetFilters from 'utils/resetFilters'
import { ICON_SIZE } from '@/utils/vars'
import CustomButton from '@/shared-components/CustomButton'
import { Typography, TypographyProps } from '@/shared-components/Typography'
import TechFilters from '../TechFilters'
import LocationFilters from '../LocationFilters'
import SalaryFilter from '../SalaryFilter'
import ExpLvlFilter from '../ExpLvlFilter'
import {
	Container,
	FilterContainer,
	FiltersHeader,
	SubContainer,
} from './styled'

const Filters = () => {
	const router = useRouter()

	const filterTitleProps: TypographyProps = {
		display: 'block',
		minWidth: '100%',
		color: 'text',
		fWeight: 700,
		align: 'left',
		margin: '1.25em 0',
	}

	return (
		<Container>
			<SubContainer>
				<FiltersHeader>
					<div>
						<Typography fontSize='xxl'>Filters</Typography>
					</div>
					<CustomButton
						display='flex'
						icon={{
							icon: <Close fontSize={ICON_SIZE} />,
							color: 'text',
							margin: '.45em 0 0 0',
						}}
						padding='0.5em 1.875em'
						handleClick={() => resetFilters(router)}>
						Clear filters
					</CustomButton>
				</FiltersHeader>
				<Typography {...filterTitleProps}>Locations</Typography>

				<FilterContainer>
					<LocationFilters />
				</FilterContainer>
				<Typography {...filterTitleProps}>Technology</Typography>
				<FilterContainer>
					<TechFilters />
				</FilterContainer>
				<Typography {...filterTitleProps}>Salary</Typography>
				<FilterContainer>
					<SalaryFilter />
				</FilterContainer>
				<Typography {...filterTitleProps}>Seniority</Typography>
				<ExpLvlFilter />
			</SubContainer>
		</Container>
	)
}

export default Filters
