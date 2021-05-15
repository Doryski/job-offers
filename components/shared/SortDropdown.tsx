import { useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick'
import useDialogHandler from '@/hooks/useDialogHandler'
import { SORT_OPTIONS } from '@/helpers/utils'
import { useRouter } from 'next/router'
import createQuery from '@/helpers/createQuery'
import { StyledExpandMoreIcon } from './ExpandMoreIcon'
import Typography from './Typography'
import { DropdownList, DropdownListItem } from './DropdownList'

export const ButtonWrapper = styled.div`
	margin-left: 1em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	padding: 0.25em 0.5em;
	position: relative;
`

const SortDropdown = () => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	const { close, toggle, isOpen } = useDialogHandler(false)
	useDetectOutsideClick(listRef, close)

	const getCurrentSortOption = SORT_OPTIONS.find(({ id }) => id === query.sort)
	return (
		<ButtonWrapper ref={listRef} onClick={toggle}>
			<Typography color='span'>Sort by:</Typography>
			<Typography color='span' margin='0 .25em 0 .5em'>
				{getCurrentSortOption?.name || SORT_OPTIONS[2].name}
			</Typography>
			<StyledExpandMoreIcon isOpen={isOpen} />

			<DropdownList
				ref={listRef}
				width='126px'
				isOpen={isOpen}
				position={{ right: '0' }}>
				{SORT_OPTIONS.map(({ id, name }) => (
					<Link
						key={id}
						href={createQuery({ query: 'sort', value: id }, query)}
						shallow>
						<a>
							<DropdownListItem onClick={close}>
								<Typography color='text' align='left' padding='0.5em 0.7em'>
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

export default SortDropdown
