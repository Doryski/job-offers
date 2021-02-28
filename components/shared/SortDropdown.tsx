import { useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Typography from './Typography'
import { SORT_OPTIONS } from '../../helpers/utils'
import { StyledExpandMoreIcon } from './CustomButton'
import { DropdownList, DropdownListItem } from './DropdownList'
import { textColors } from '../../theme'
import useDialogHandler from '../../helpers/useDialogHandler'
import useDetectOutsideClick from '../../helpers/useDetectOutsideClick'
import { useRouter } from 'next/router'
import createQuery from '../../helpers/createQuery'

const SortDropdown = () => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	const { close, toggle, isDialogOpen: isListOpen } = useDialogHandler(false)
	useDetectOutsideClick(listRef, close)

	const getCurrentSortOption =
		query.sort === SORT_OPTIONS.salaryUp.id
			? SORT_OPTIONS.salaryUp
			: query.sort === SORT_OPTIONS.salaryDown.id
			? SORT_OPTIONS.salaryDown
			: SORT_OPTIONS.dateLatest
	const salaryDownQuery = createQuery(
		{
			query: 'sort',
			value: SORT_OPTIONS.salaryDown.id,
		},
		query
	)

	const salaryUpQuery = createQuery(
		{
			query: 'sort',
			value: SORT_OPTIONS.salaryUp.id,
		},
		query
	)

	return (
		<ButtonWrapper ref={listRef} onClick={toggle}>
			<Typography color={textColors.span}>Sort by:</Typography>
			<Typography color={textColors.span} margin='0 .25em 0 .5em'>
				{getCurrentSortOption.name}
			</Typography>
			<StyledExpandMoreIcon isOpen={isListOpen} />

			<DropdownList ref={listRef} width='126px' isOpen={isListOpen}>
				<Link href={createQuery({ query: 'sort', value: '' }, query)} shallow>
					<a onClick={close}>
						<DropdownListItem>
							<Typography
								color={textColors.text}
								align='left'
								padding='0.5em 0.7em'>
								{SORT_OPTIONS.dateLatest.name}
							</Typography>
						</DropdownListItem>
					</a>
				</Link>
				<Link href={salaryDownQuery} shallow>
					<a onClick={close}>
						<DropdownListItem>
							<Typography
								color={textColors.text}
								align='left'
								padding='0.5em 0.7em'>
								{SORT_OPTIONS.salaryDown.name}
							</Typography>
						</DropdownListItem>
					</a>
				</Link>
				<Link href={salaryUpQuery} shallow>
					<a onClick={close}>
						<DropdownListItem>
							<Typography
								color={textColors.text}
								align='left'
								padding='0.5em 0.7em'>
								{SORT_OPTIONS.salaryUp.name}
							</Typography>
						</DropdownListItem>
					</a>
				</Link>
			</DropdownList>
		</ButtonWrapper>
	)
}
export const ButtonWrapper = styled.div`
	margin: 0 0.3125em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`

export default SortDropdown
