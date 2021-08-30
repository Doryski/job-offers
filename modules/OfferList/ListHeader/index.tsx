import SortDropdown from '@/shared-components/SortDropdown'
import { Typography } from '@/shared-components/Typography'
import InputFilter from '@/shared-components/InputFilter'
import { useRouter } from 'next/router'
import resetFilters from 'utils/resetFilters'
import { ICON_SIZE } from '@/utils/vars'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import {
	FiltersWrapper,
	OptionsHeader,
	ShowFiltersIcon,
	SortFiltersWrapper,
	Wrapper,
} from './styled'

type HandleFiltersClickType = {
	mobile: () => void
	desktop: () => void
}

type ListHeaderProps = {
	areFiltersVisible: boolean
	handleFiltersClick: HandleFiltersClickType
}

const ListHeader = ({
	areFiltersVisible,
	handleFiltersClick,
}: ListHeaderProps) => {
	const router = useRouter()
	const { isMobile } = useDeviceDetect()
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
					<FiltersWrapper
						onClick={
							isMobile ? handleFiltersClick.mobile : handleFiltersClick.desktop
						}>
						<Typography color='span'>Filters</Typography>
						<ShowFiltersIcon fontSize={ICON_SIZE} isOpen={areFiltersVisible} />
					</FiltersWrapper>
				</Wrapper>
			</SortFiltersWrapper>
		</OptionsHeader>
	)
}

export default ListHeader
