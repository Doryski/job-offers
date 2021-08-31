import { useEffect, useState } from 'react'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import useBooleanState from '@/hooks/useBooleanState'
import { OfferPageDataType } from '@/types'

export default function useHomepageViewManager() {
	const { isMobile, isDesktop } = useDeviceDetect()
	const [
		areFiltersVisible,
		showFilters,
		hideFilters,
		toggleFilters,
	] = useBooleanState(false)
	const [isListView, openListView, closeListView] = useBooleanState(true)

	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>(
		{} as OfferPageDataType
	)
	useEffect(() => {
		if (isDesktop) {
			showFilters()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDesktop])

	const handleOfferCardClick = {
		mobile: (offer: OfferPageDataType) => {
			setCurrentOffer(offer)
			hideFilters()
			closeListView()
		},
		desktop: (offer: OfferPageDataType) => {
			setCurrentOffer(offer)
			hideFilters()
		},
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
			return
		}
		openListView()
	}
	return {
		currentOffer,
		areFiltersVisible,
		isListView: isMobile ? isListView : undefined,
		handleOfferCardClick: isMobile
			? handleOfferCardClick.mobile
			: handleOfferCardClick.desktop,

		handleFiltersClick: isMobile
			? handleFiltersClick.mobile
			: handleFiltersClick.desktop,

		handleArrowButtonClick: isMobile ? handleArrowButtonClick : undefined,
		openListView: isMobile ? openListView : undefined,
	}
}
