import { useState } from 'react'
import CustomButton from '../shared/CustomButton'
import styled from 'styled-components'
import DialogHeader from '../shared/DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { LOCATIONS } from '../../helpers/utils'
import DialogFooter from '../shared/DialogFooter'
import Typography from '../shared/Typography'
import theme, { textColors } from '../../theme'
import LocationButton from './LocationButton'
import useDialogHandler from '../../hooks/useDialogHandler'
import Dialog from '@material-ui/core/Dialog'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import { useRouter } from 'next/router'
import createQuery from '../../helpers/createQuery'
import stringFormat from '../../helpers/stringFormat'

const LocationFilters = () => {
	const router = useRouter()
	const { query } = router
	const [location, setLocation] = useState<string>('')
	const fullScreen = useMediaQuery('(max-width:800px)')
	const { isDialogOpen, open, close } = useDialogHandler(false)
	const TOP_LOCATIONS_NUM = 6
	const isMobile = useDeviceDetect(1025)

	const locQuery = createQuery(
		{
			query: 'location',
			value: stringFormat(location),
		},
		query
	)

	const handleReset = () => {
		setLocation('')
		close()
	}
	const handleApplyFilter = () => {
		router.push(locQuery, undefined, { shallow: true })
		close()
	}
	const locProps = {
		setLocation: setLocation,
		location: location,
	}
	const headingProps = {
		display: 'flex',
		color: textColors.text,
		fWeight: theme.fontWeight[700],
		fontSize: theme.fontSize.large,
	}

	// if location filters clicked
	// -> switch all filters screen to locations table 3x7

	return (
		<>
			<CustomButton
				handleClick={open}
				margin={isMobile ? '-0.625em 0 0 0.25em' : '0.375em 1.25em 0 0.3125em'}
				active={!!query.location}
				icon
				minWidth={isMobile ? '105px' : '148px'}
				isOpen={isDialogOpen}
				padding='0.425em 0.75em 0.425em 1em'>
				{query.location && location ? location : 'Location'}
			</CustomButton>
			{isDialogOpen && (
				<Dialog
					maxWidth='sm'
					open={isDialogOpen}
					onClose={close}
					fullWidth
					fullScreen={fullScreen}>
					<Container>
						<DialogHeader close={close}>Location</DialogHeader>

						<Typography {...headingProps} padding='1.25em 1.25em 0 1.25em'>
							Top locations
						</Typography>
						<Wrapper>
							{LOCATIONS.slice(0, TOP_LOCATIONS_NUM).map((loc) => (
								<LocationButton {...locProps} key={loc} loc={loc} />
							))}
						</Wrapper>
						<Typography {...headingProps} padding='0 1.25em'>
							Other locations
						</Typography>
						<Wrapper>
							{LOCATIONS.slice(TOP_LOCATIONS_NUM).map((loc) => (
								<LocationButton {...locProps} key={loc} loc={loc} />
							))}
						</Wrapper>

						<DialogFooter
							handleReset={handleReset}
							handleApplyFilter={handleApplyFilter}
						/>
					</Container>
				</Dialog>
			)}
		</>
	)
}

export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
`
export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0.9375em;
`

export default LocationFilters
