import { useEffect, useState } from 'react'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import useBooleanState from '@/hooks/useBooleanState'
import { OfferPageDataType } from '@/types'

export default function useHomepageViewManager() {
	const { isDesktop } = useDeviceDetect()
	const [
		areFiltersVisible,
		showFilters,
		hideFilters,
		toggleFilters,
	] = useBooleanState(false)
	const [isListView, openListView, closeListView, ,] = useBooleanState(true)

	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>(
		{} as OfferPageDataType
	)
	useEffect(() => {
		if (isDesktop) {
			showFilters()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDesktop])

	const handleOfferCardClick = (offer: OfferPageDataType) => {
		setCurrentOffer(offer)
		hideFilters()
		closeListView()
	}

	const handleFiltersClick = {
		mobile: () => {
			showFilters()
			setCurrentOffer({} as OfferPageDataType)
			closeListView()
		},
		desktop: () => toggleFilters(),
	}

	const handleArrowButtonClick = () => {
		if (isListView) {
			closeListView()
		} else {
			openListView()
		}
	}
	return {
		currentOffer,
		areFiltersVisible,
		handleOfferCardClick,
		handleFiltersClick,
		handleArrowButtonClick,
		isListView,
		openListView,
	}
}
