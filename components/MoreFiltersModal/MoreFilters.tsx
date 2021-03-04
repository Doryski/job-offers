import CustomButton from '../shared/CustomButton'
import Typography from '../shared/Typography'
import styled from 'styled-components'
import { textColors } from '../../theme'
import useDialogHandler from '../../hooks/useDialogHandler'
import DialogComponent from './DialogComponent'
import useDeviceDetect from '../../hooks/useDeviceDetect'
import { useRouter } from 'next/router'
import { useState } from 'react'
export type Value = number | number[]

const MoreFilters = () => {
	const { query } = useRouter()
	const [expLvl, setExpLvl] = useState('')
	const [value, setValue] = useState<Value>([0, 50000])

	const isActive = !!query.expLvl || !!query.from || !!query.to
	const { isDialogOpen, open, close } = useDialogHandler(false)
	const isMobile = useDeviceDetect(600)
	const handleOpen = () => {
		setExpLvl(query.expLvl as string)
		setValue([+query.from, +query.to])
		open()
	}
	const dialogProps = {
		isDialogOpen,
		close,
		expLvl,
		value,
		setExpLvl,
		setValue,
	}
	return (
		<>
			<CustomButton
				handleClick={handleOpen}
				active={isActive}
				icon
				isOpen={isDialogOpen}
				padding={
					isMobile ? '0.375em 0.5em 0.375em .3em' : '0.375em 0.5em 0.375em 1em'
				}
				margin={
					isMobile
						? '-0.25em 0 0.3125em 0.25em'
						: '0.3 0.3125em 0.3125em 0.625em'
				}
				minWidth={isMobile ? '119px' : '158px'}
				display='flex'>
				<Typography
					color={isActive ? textColors.pink : textColors.text}
					fontSize='inherit'
					fWeight='inherit'
					margin={isActive ? '.125em 0 0 .5em' : '0 0 0 .5em'}>
					More filters
				</Typography>
			</CustomButton>
			{isDialogOpen && <DialogComponent {...dialogProps} />}
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
