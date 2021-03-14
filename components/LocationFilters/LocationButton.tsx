import CustomButton from '../shared/CustomButton'
import { useRouter } from 'next/router'
import stringFormat from '../../helpers/stringFormat'
import createQuery from '../../helpers/createQuery'

const LocationButton = ({ location }: { location: string }) => {
	const { query, push } = useRouter()
	const locQuery = (location: string) =>
		createQuery(
			{
				query: 'location',
				value: stringFormat(location),
			},
			query
		)
	const isLocInQuery = query.location === stringFormat(location)
	return (
		<CustomButton
			handleClick={() => {
				push(isLocInQuery ? locQuery('') : locQuery(location), undefined, {
					shallow: true,
				})
			}}
			active={query.location && isLocInQuery}
			padding='0.5em 1.875em'
			margin='.25em .5em .25em 0'
			fWeight={query.location && isLocInQuery ? 600 : 400}>
			{location}
		</CustomButton>
	)
}

export default LocationButton
