import styled from 'styled-components'
import { LOCATIONS } from '@/utils/vars'
import LocationButton from './LocationButton'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const LocationFilters = () => (
	<Wrapper>
		{LOCATIONS.map(location => (
			<LocationButton key={location} location={location} />
		))}
	</Wrapper>
)

export default LocationFilters
