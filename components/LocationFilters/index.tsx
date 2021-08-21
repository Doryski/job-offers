import { LOCATIONS } from '@/utils/vars'
import LocationButton from './LocationButton'
import { Wrapper } from './styled'

const LocationFilters = () => (
	<Wrapper>
		{LOCATIONS.map(location => (
			<LocationButton key={location} location={location} />
		))}
	</Wrapper>
)

export default LocationFilters
