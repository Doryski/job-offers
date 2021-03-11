import { useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Typography from './Typography'
import { SORT_OPTIONS } from '../../helpers/utils'
import { StyledExpandMoreIcon } from './CustomButton'
import { DropdownList, DropdownListItem } from './DropdownList'
import { textColors } from '../../theme'
import useDialogHandler from '../../hooks/useDialogHandler'
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick'
import { useRouter } from 'next/router'
import createQuery from '../../helpers/createQuery'

const SortDropdown = () => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	const { close, toggle, isDialogOpen: isListOpen } = useDialogHandler(false)
	useDetectOutsideClick(listRef, close)

	const getCurrentSortOption = SORT_OPTIONS.find(({ id }) => id === query.sort)
	return (
		<ButtonWrapper ref={listRef} onClick={toggle}>
			<Typography color={textColors.span}>Sort by:</Typography>
			<Typography color={textColors.span} margin='0 .25em 0 .5em'>
				{getCurrentSortOption?.name || SORT_OPTIONS[2].name}
			</Typography>
			<StyledExpandMoreIcon isOpen={isListOpen} />

			<DropdownList
				ref={listRef}
				width='126px'
				isOpen={isListOpen}
				position={{ right: '0' }}>
				{SORT_OPTIONS.map(({ id, name }) => (
					<Link
						key={id}
						href={createQuery({ query: 'sort', value: id }, query)}
						shallow>
						<a onClick={close}>
							<DropdownListItem>
								<Typography
									color={textColors.text}
									align='left'
									padding='0.5em 0.7em'>
									{name}
								</Typography>
							</DropdownListItem>
						</a>
					</Link>
				))}
			</DropdownList>
		</ButtonWrapper>
	)
}
export const ButtonWrapper = styled.div`
	margin-left: 1.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	border-right: 1px solid ${({ theme }) => theme.colors.divider};
	padding: 0.25em 0.5em 0.25em 0;
	position: relative;
`

export default SortDropdown
