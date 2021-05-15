import CustomButton from '@/components/shared/CustomButton'
import { useRouter } from 'next/router'
import createQuery from '@/helpers/createQuery'

const LocationButton = ({ location }: { location: string }) => {
	const { query, push } = useRouter()
	const locQuery = (loc: string) =>
		createQuery(
			{
				query: 'location',
				value: loc.myNormalize(),
			},
			query
		)
	const isLocInQuery = query.location === location.myNormalize()
	return (
		<CustomButton
			handleClick={() => {
				push(isLocInQuery ? locQuery('') : locQuery(location), undefined, {
					shallow: true,
				})
			}}
			active={!!query.location && isLocInQuery}
			padding='0.5em 1.875em'
			margin='.25em .5em .25em 0'
			fWeight={query.location && isLocInQuery ? 600 : 400}>
			{location}
		</CustomButton>
	)
}

export default LocationButton
