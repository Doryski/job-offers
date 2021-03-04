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
import resetFilters from '../../helpers/resetFilters'
import useChangeDetect from '../../debug/useChangeDetect'
import { Value } from './MoreFilters'

const DialogComponent = ({
	close,
	isDialogOpen,
	setValue,
	value,
	setExpLvl,
	expLvl,
}: {
	close: VoidFunction
	isDialogOpen: boolean
	setValue
	value
	setExpLvl
	expLvl
}) => {
	const router = useRouter()
	const { query } = router
	const fullScreen = useMediaQuery('(max-width:800px)')
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
	useEffect(() => {
		const fromVal = query.from ? from : 0
		const toVal = query.to ? to : 50000
		setValue([+fromVal, +toVal])
	}, [query.from, query.to])
	const handleReset = () => {
		resetFilters(query, router)
		close()
	}

	const handleApplyFilter = () => {
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
					handleReset={handleReset}
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
