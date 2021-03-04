import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Dialog } from '@material-ui/core'
import DialogHeader from '../shared/DialogHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SliderArea from './SliderArea'
import DialogFooter from '../shared/DialogFooter'
import createQuery from '../../helpers/createQuery'
import { useRouter } from 'next/router'
import { Query } from '../../types'
import stringFormat from '../../helpers/stringFormat'
import { MAX_SLIDER_VALUE } from '../../helpers/utils'
import getValue from '../../helpers/getValue'
import devlog from '../../helpers/devlog'

export type Value = number | number[]

const DialogComponent = ({
	close,
	isDialogOpen,
}: {
	close: VoidFunction
	isDialogOpen: boolean
}) => {
	const router = useRouter()
	const { query } = router
	const [value, setValue] = useState<Value>([0, 50000])
	const fullScreen = useMediaQuery('(max-width:800px)')
	const [expLvl, setExpLvl] = useState('')
	const [mfQuery, setMfQuery] = useState('')
	const handleChange = (_: React.ChangeEvent<{}>, newValue: Value) =>
		setValue(newValue as number[])

	const fromValue = getValue(value, 0)
	const from = !fromValue ? '' : fromValue.toString()
	const toValue = getValue(value, 1)
	const to = toValue === MAX_SLIDER_VALUE || !toValue ? '' : toValue.toString()
	useEffect(() => {
		const moreFiltersData: Query[] = [
			{ query: 'expLvl', value: stringFormat(expLvl) },
			{ query: 'from', value: from },
			{ query: 'to', value: to },
		]
		const path = createQuery(moreFiltersData, query)
		setMfQuery(path)
	}, [from, to, expLvl])
	const handleApplyFilter = () => {
		// devlog(mfQuery)
		router.push(mfQuery, undefined, { shallow: true })
		close()
	}
	return (
		<Dialog
			maxWidth='sm'
			open={isDialogOpen}
			onClose={close}
			fullWidth
			fullScreen={fullScreen}>
			<Container>
				<DialogHeader close={close}>More filters</DialogHeader>

				<SliderArea
					handleChange={handleChange}
					value={value}
					expLvl={expLvl}
					setExpLvl={setExpLvl}
				/>

				<DialogFooter
					handleReset={close}
					handleApplyFilter={handleApplyFilter}
				/>
			</Container>
		</Dialog>
	)
}
export const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.primary};
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`

export default DialogComponent
