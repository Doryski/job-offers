import { useEffect, useState } from 'react'
import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import { LOCATIONS } from '../../helpers/utils'
import Typography from '../shared/Typography'
import theme, { textColors } from '../../theme'
import LocationButton from './LocationButton'
import useDialogHandler from '../../hooks/useDialogHandler'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import { useRouter } from 'next/router'
import createQuery from '../../helpers/createQuery'
import stringFormat from '../../helpers/stringFormat'
import resetFilters from '../../helpers/resetFilters'

const LocationFilters = () => {
	const router = useRouter()
	const { query } = router
	const [location, setLocation] = useState<string>('')
	const { isDialogOpen, open, close } = useDialogHandler(false)
	const isMobile = useDeviceDetect(1025)
	const [locQuery, setLocQuery] = useState('')

	useEffect(() => {
		const path = createQuery(
			{
				query: 'location',
				value: stringFormat(location),
			},
			query
		)
		setLocQuery(path)
	}, [location])

	useEffect(() => {
		setLocation(query.location ? location : '')
	}, [query.location])

	const handleReset = () => {
		resetFilters(query, router)
		close()
	}
	const handleApplyFilter = () => {
		router.push(locQuery, undefined, { shallow: true })
		close()
	}

	const locProps = { setLocation, location }
	const headingProps = {
		display: 'flex',
		color: textColors.text,
		fWeight: theme.fontWeight[700],
		fontSize: theme.fontSize.large,
	}

	return (
		<>
			{/* <CustomButton
				handleClick={open}
				margin={isMobile ? '-0.625em 0 0 0.25em' : '0.7em 1.25em 0 0.3125em'}
				active={!!query.location}
				icon
				minWidth={isMobile ? '105px' : '148px'}
				isOpen={isDialogOpen}
				padding='0.425em 0.75em 0.425em 1em'>
				{query.location ? location : 'Location'}
			</CustomButton> */}

			<Container>
				<Typography {...headingProps} padding='1.25em 1.25em 0 1.25em'>
					Locations
				</Typography>
				<Wrapper>
					{LOCATIONS.map((loc) => (
						<LocationButton {...locProps} key={loc} loc={loc} />
					))}
				</Wrapper>
			</Container>
		</>
	)
}

export const Container = styled.div`
	height: 100%;
	width: 100%;
`
export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0.9375em;
`

export default LocationFilters
