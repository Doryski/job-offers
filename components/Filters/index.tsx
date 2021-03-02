import styled from 'styled-components'
import LocationFilters from '../LocationFiltersModal'
import MoreFilters from '../MoreFiltersModal/MoreFilters'
import TechFilters from '../TechFilters'
import InputFilter from '../shared/InputFilter'
import useDeviceDetect from '../../hooks/useDeviceDetect'

const Filters = () => {
	const isMobile = useDeviceDetect(1025)
	return (
		<Container>
			<InputFilter />
			{isMobile ? (
				<>
					<LocationFilters />
					<TechFilters />
				</>
			) : (
				<Wrapper>
					<LocationFilters />
					<TechFilters />
				</Wrapper>
			)}
			<MoreFilters />
		</Container>
	)
}

export const Container = styled.div`
	min-height: 68px;
	max-width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	padding: 0.875em 0.9375em 0.625em 1.1875em;
	@media only screen and (max-width: 1025px) {
		width: 100%;
		padding-left: 0.25em;
		padding-right: 0.25em;
		justify-content: space-evenly;
	}
`

export const Wrapper = styled.div`
	display: flex;
	@media only screen and (min-width: 1025px) {
		width: 100%;
		padding-left: 0.25em;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1 1 0%;
		flex-flow: row nowrap;
	}
`

export default Filters
