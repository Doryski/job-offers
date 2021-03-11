import { Close } from '@material-ui/icons'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import resetFilters from '../../helpers/resetFilters'
import LocationFilters from '../LocationFilters'
import MoreFilters from '../MoreFilters'
import CustomButton from '../shared/CustomButton'
import { ICON_SIZE } from '../shared/InfoLabel'
import Typography from '../shared/Typography'
import TechFilters from '../TechFilters'

const Filters = () => {
	const router = useRouter()
	const { query } = router
	const handleReset = () => {
		resetFilters(query, router)
	}

	return (
		<Container>
			<FiltersHeader>
				<div>
					<Typography fontSize='1.5rem'>Filters</Typography>
				</div>
				<a onClick={handleReset}>
					<CustomButton
						icon={<Close fontSize={ICON_SIZE} />}
						padding='0.5em 1.875em'>
						Clear filters
					</CustomButton>
				</a>
			</FiltersHeader>
			<LocationFilters />
			<TechFilters />
			<MoreFilters />
		</Container>
	)
}

export const Container = styled.div`
	min-height: 92vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-left: 1px solid ${({ theme }) => theme.colors.divider};
	@media only screen and (max-width: 1025px) {
		width: 100%;
		padding-left: 0.25em;
		padding-right: 0.25em;
		justify-content: space-evenly;
	}
`
export const FiltersHeader = styled.div`
	padding: 0.9375em 1.25em;
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export default Filters
