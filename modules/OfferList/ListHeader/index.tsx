import SortDropdown from '@/shared-components/SortDropdown'
import { Typography } from '@/shared-components/Typography'
import InputFilter from '@/shared-components/InputFilter'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import resetFilters from 'utils/resetFilters'
import { ICON_SIZE } from '@/utils/vars'
import {
	FiltersWrapper,
	OptionsHeader,
	ShowFiltersIcon,
	SortFiltersWrapper,
	Wrapper,
} from './styled'

type ListHeaderProps = {
	showFilters: boolean
	setShowFilters: Dispatch<SetStateAction<boolean>>
}

const ListHeader = ({ showFilters, setShowFilters }: ListHeaderProps) => {
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
