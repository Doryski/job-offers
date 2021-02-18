import CustomButton from '../shared/CustomButton'
import { Tune } from '@material-ui/icons'
import Typography from '../shared/Typography'
import styled from 'styled-components'
import { textColors } from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import DialogComponent from './DialogComponent'
import useDeviceDetect from '../../helpers/useDeviceDetect'
import { useRouter } from 'next/router'

const MoreFilters = () => {
	const { query } = useRouter()
	const { expLvl, from, to } = query
	const isActive = !!expLvl || !!from || !!to
	const bothFiltersApplied = !!expLvl && (!!from || !!to)
	const filtersApplied = isActive && bothFiltersApplied ? 2 : 1

	const { isDialogOpen, open, close } = useDialogHandler(false)
	const isMobile = useDeviceDetect(600)

	return (
		<>
			<CustomButton
				handleClick={open}
				active={isActive}
				icon
				isOpen={isDialogOpen}
				padding={
					isMobile ? '0.375em 0.5em 0.375em .3em' : '0.375em 0.5em 0.375em 1em'
				}
				margin={
					isMobile
						? '-0.25em 0 0.3125em 0.25em'
						: '-0.75em 0.3125em 0.3125em 0.625em'
				}
				minWidth={isMobile ? '119px' : '158px'}
				display='flex'>
				{!isMobile &&
					(isActive ? (
						<Number>{filtersApplied}</Number>
					) : (
						<Tune fontSize='small' />
					))}
				<Typography
					color={isActive ? textColors.pink : textColors.text}
					fontSize='inherit'
					fWeight='inherit'
					margin={isActive ? '.125em 0 0 .5em' : '0 0 0 .5em'}>
					More filters
				</Typography>
			</CustomButton>
			{isDialogOpen && (
				<DialogComponent isDialogOpen={isDialogOpen} close={close} />
			)}
		</>
	)
}

export const Number = styled.div`
	width: 24px;
	height: 24px;
	text-align: center;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.white};
	margin-left: 0px;
	border-radius: 5px;
	background: rgb(255, 64, 129);
`

export default MoreFilters
