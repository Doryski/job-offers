import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import stringFormat from '../../helpers/stringFormat'

type LocationButtonProps = {
	loc: string
	setLocation: React.Dispatch<React.SetStateAction<string | null>>
	location: string | null
}

const LocationButton = ({
	loc,
	setLocation,
	location,
}: LocationButtonProps) => {
	const { query } = useRouter()
	return (
		<ItemWrapper key={loc}>
			<CustomButton
				handleClick={() => setLocation(loc)}
				active={
					location ? loc === location : stringFormat(loc) === query.location
				}
				padding='0.5em 1.875em'>
				{loc}
			</CustomButton>
		</ItemWrapper>
	)
}

export const ItemWrapper = styled.div`
	margin: 0.3125em;
`

export default LocationButton
