import SortDropdown from '@/shared-components/SortDropdown'
import { Typography } from '@/shared-components/Typography'
import InputFilter from '@/shared-components/InputFilter'
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
	areFiltersVisible: boolean
	handleFiltersClick: VoidFunction
}

const ListHeader = ({
	areFiltersVisible,
	handleFiltersClick,
}: ListHeaderProps) => {
	const router = useRouter()
	const filtersCount = Object.keys(router.query).filter(key => key !== 'sort')
		.length

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
					<FiltersWrapper onClick={handleFiltersClick}>
						<Typography color='span'>Filters</Typography>
						<ShowFiltersIcon fontSize={ICON_SIZE} isOpen={areFiltersVisible} />
					</FiltersWrapper>
				</Wrapper>
			</SortFiltersWrapper>
		</OptionsHeader>
	)
}

export default ListHeader
