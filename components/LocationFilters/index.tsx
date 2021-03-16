import styled from 'styled-components'
import { LOCATIONS } from '@/helpers/utils'
import LocationButton from './LocationButton'

const LocationFilters = () => {
	return (
		<Wrapper>
			{LOCATIONS.map((location) => (
				<LocationButton key={location} location={location} />
			))}
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export default LocationFilters
