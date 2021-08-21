import { ExpandLess } from '@material-ui/icons'
import styled from 'styled-components'
import SortDropdown from '@/shared-components/SortDropdown'
import Typography from '@/shared-components/Typography'
import InputFilter from '@/shared-components/InputFilter'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import resetFilters from 'utils/resetFilters'
import { ICON_SIZE } from '@/utils/vars'

export const OptionsHeader = styled.div`
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	margin: 0 0.5em 0.5em 0;
	height: 42px;
	border-bottom-right-radius: 5px;
`
export const SortFiltersWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	padding: 0.1875em;
`

export const ShowFiltersIcon = styled(({ isOpen, fontSize, ...props }) => (
	<ExpandLess {...props} fontSize={fontSize} />
))<{ isOpen: boolean }>`
	color: ${({ theme }) => theme.colors.text};
	transform: rotate(${({ isOpen }) => (isOpen ? '-90deg' : '90deg')});
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`

export const FiltersWrapper = styled.div`
	display: flex;
	cursor: pointer;
	padding: 0.25em 0.75em 0.25em 0.75em;
	border-left: 1px solid ${({ theme }) => theme.colors.divider};
	&:last-of-type {
		margin-top: 0.1em;
	}
`

const ListHeader = ({
	showFilters,
	setShowFilters,
}: {
	showFilters: boolean
	setShowFilters: Dispatch<SetStateAction<boolean>>
}) => {
	const router = useRouter()
	const { query } = router
	const filtersCount = Object.keys(query).filter(key => key !== 'sort').length

	return (
		<OptionsHeader>
			<SortFiltersWrapper>
				<InputFilter />
				<Wrapper>
					<SortDropdown />
					{filtersCount > 0 && (
						<FiltersWrapper onClick={() => resetFilters(router)}>
							<Typography color='span'>Clear {filtersCount}</Typography>
						</FiltersWrapper>
					)}
					<FiltersWrapper onClick={() => setShowFilters(prev => !prev)}>
						<Typography color='span'>Filters</Typography>
						<ShowFiltersIcon fontSize={ICON_SIZE} isOpen={showFilters} />
					</FiltersWrapper>
				</Wrapper>
			</SortFiltersWrapper>
		</OptionsHeader>
	)
}

export default ListHeader
