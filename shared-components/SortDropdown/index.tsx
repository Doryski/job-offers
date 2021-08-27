import { useRef } from 'react'
import Link from 'next/link'
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick'
import useBooleanState from '@/hooks/useBooleanState'
import { SORT_OPTIONS } from '@/utils/vars'
import { useRouter } from 'next/router'
import createQuery from 'utils/createQuery'
import { ExpandMoreIcon } from '../ExpandMoreIcon/styled'
import { Typography } from '../Typography'
import { DropdownList, DropdownListItem } from '../DropdownList/styled'
import { ButtonWrapper, DropdownWrapper } from './styled'

const SortDropdown = () => {
	const { query } = useRouter()
	const listRef = useRef<HTMLDivElement>(null!)
	const [isOpen, , close, toggle] = useBooleanState(false)
	useDetectOutsideClick(listRef, close)

	const getCurrentSortOption = SORT_OPTIONS.find(({ id }) => id === query.sort)

	return (
		<DropdownWrapper>
			<ButtonWrapper onClick={toggle}>
				<Typography color='span'>Sort by:</Typography>
				<Typography color='span' margin='0 .25em 0 .5em'>
					{getCurrentSortOption?.name || SORT_OPTIONS[2].name}
				</Typography>
				<ExpandMoreIcon isOpen={isOpen} />
			</ButtonWrapper>

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
		</DropdownWrapper>
	)
}

export default SortDropdown
