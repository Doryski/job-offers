import styled from 'styled-components'
import { GetStaticProps } from 'next'
import ListHeader from '@/modules/OfferList/ListHeader'
import Layout from '@/modules/Layout'
import { OfferPageDataType } from '@/types'
import List from '@/modules/OfferList/List'
import Center from '@/shared-components/Center/styled'
import { DATE_FORMAT } from '@/utils/vars'
import moment from 'moment'
import { db } from '@/mysqlSetup'
import fixObject from 'utils/fixObject'
import Filters from '@/modules/Filters'
import dynamic from 'next/dynamic'
import OfferList from '@/modules/OfferList'
import ArrowButton from '@/shared-components/ArrowButton'
import useDeviceDetect from '@/hooks/useDeviceDetect'
import useHomepageViewManager from '@/hooks/useHomepageViewManager'

const OfferPage = dynamic(() => import('@/modules/OfferPage'), {
	loading: () => <Center>Loading...</Center>,
})

const SubContainer = styled.div<{ isListView: boolean }>`
	display: grid;
	grid-template-columns: 50% auto;
	height: 92vh;
	background: ${({ theme }) => theme.colors.dark};

	@media only screen and (max-width: 760px) {
		transition: transform 0.3s ease;
		width: 200vw;
		transform: ${({ isListView }) =>
			isListView ? 'unset' : 'translateX(-100vw)'};
	}
`

type HomepageProps = { data: OfferPageDataType[]; error: string }

const Homepage = ({ data, error }: HomepageProps) => {
	const { isMobile } = useDeviceDetect()
	const {
		currentOffer,
		areFiltersVisible,
		handleOfferCardClick,
		handleFiltersClick,
		handleArrowButtonClick,
		isListView,
		openListView,
	} = useHomepageViewManager()

	const isOfferSelected = Object.keys(currentOffer).length > 0

	return (
		<Layout
			handleLogoClick={() => openListView()}
			subContainer={
				<>
					{isMobile && (
						<ArrowButton
							direction={isListView ? 'right' : 'left'}
							handleClick={handleArrowButtonClick}
						/>
					)}
					<SubContainer isListView={isMobile && isListView}>
						<OfferList>
							<ListHeader
								areFiltersVisible={areFiltersVisible}
								handleFiltersClick={handleFiltersClick}
							/>
							<List
								data={data}
								error={error}
								handleOfferCardClick={handleOfferCardClick}
							/>
						</OfferList>

						{areFiltersVisible && <Filters />}
						{isOfferSelected && !areFiltersVisible && (
							<OfferPage offer={currentOffer} />
						)}
						{!isOfferSelected && !areFiltersVisible && (
							<Center>Click on offer card to show details.</Center>
						)}
					</SubContainer>
				</>
			}
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const sqlGet = `SELECT offers.uuid AS offerId, offers.title,
    offers.tech, offers.empType, offers.expLvl,
    offers.salaryFrom, offers.salaryTo, 
    offers.technology, offers.description, offers.dateAdded, 
    employers.companyName, employers.companySize,
    employers.street, employers.city,
    employers.uuid AS employerId 
    FROM (offers
    INNER JOIN employers ON offers.employerId = employers.uuid)`
	try {
		const result = await db.promise().query(sqlGet)
		const data = fixObject(result[0])
		console.info('get api/offers/employers: ', data)
		if (!data.length)
			return { props: { data: 'No offers found.' }, revalidate: 1 }

		const fixed = data.map(
			(el: OfferPageDataType & { technology: string }) => ({
				...el,
				dateAdded: moment(+el.dateAdded).format(DATE_FORMAT),
				technology: JSON.parse(el.technology),
			})
		)
		return {
			props: {
				data: fixed,
			},
			revalidate: 1,
		}
	} catch (error) {
		console.error(error)
		return {
			props: { error: 'Failed to load.' },
			revalidate: 1,
		}
	}
}

export { SubContainer }
export default Homepage
