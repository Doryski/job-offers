import styled from 'styled-components'
import { GetStaticProps } from 'next'
import ListHeader from '@/components/OfferList/ListHeader'
import Layout from '@/components/Layout'
import { OfferPageDataType } from '@/types'
import List from '@/components/OfferList/List'
import Center from '@/shared-components/Center/styled'
import { useEffect, useState } from 'react'
import { DATE_FORMAT } from '@/utils/vars'
import moment from 'moment'
import { db } from '@/mysqlSetup'
import fixObject from 'utils/fixObject'
import Filters from '@/components/Filters'
import dynamic from 'next/dynamic'
import OfferList from '@/components/OfferList'

const OfferPage = dynamic(() => import('@/components/OfferPage'), {
	loading: () => <Center>Loading...</Center>,
})

const SubContainer = styled.div`
	display: grid;
	grid-template-columns: 50% auto;
	height: 92vh;
	background: ${({ theme }) => theme.colors.dark};
`

type HomepageProps = { data: OfferPageDataType[] | string }

const Homepage = ({ data }: HomepageProps) => {
	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>(
		{} as OfferPageDataType
	)
	const [showFilters, setShowFilters] = useState(false)
	useEffect(() => {
		setShowFilters(true)
	}, [])
	const listProps = { data, setCurrentOffer, setShowFilters }
	const listHeaderProps = { showFilters, setShowFilters }
	const isOfferSelected = Object.keys(currentOffer).length > 0

	return (
		<Layout
			subContainer={
				<SubContainer>
					{/* <SubContainer> */}
					<OfferList>
						<ListHeader {...listHeaderProps} />
						<List {...listProps} />
					</OfferList>

					{showFilters && <Filters />}
					{isOfferSelected && !showFilters && (
						<OfferPage offer={currentOffer} />
					)}
					{!isOfferSelected && !showFilters && (
						<Center>Click on offer card to show details.</Center>
					)}
					{/* </SubContainer> */}
				</SubContainer>
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
		if (!data) return { props: { data: 'No offers found.' }, revalidate: 1 }
		const fixed = (data ?? []).map(
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
		return { props: { data: 'Failed to load.' }, revalidate: 1 }
	}
}

export { SubContainer }
export default Homepage
