import styled from 'styled-components'
import { GetStaticProps } from 'next'
import ListHeader from '@/components/OfferList/ListHeader'
import Layout from '@/components/Layout'
import { OfferPageDataType } from '@/types'
import List from '@/components/OfferList/List'
import Center from '@/components/shared/Center'
import { useEffect, useState } from 'react'
import { DATE_FORMAT } from '@/helpers/utils'
import moment from 'moment'
import { db } from '@/mysqlSetup'
import fixObject from '@/helpers/fixObject'
import devlog from '@/debug/devlog'
import Filters from '@/components/Filters'
import dynamic from 'next/dynamic'

const OfferPage = dynamic(() => import('@/components/OfferPage'), {
	loading: () => <Center>Loading...</Center>,
})

export const SubContainer = styled.div`
	display: grid;
	grid-template-columns: 50% auto;
	height: 92vh;
	background: ${({ theme }) => theme.colors.dark};
`
export const ListContainer = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: 1025px) {
		width: 100%;
	}
`
export const Container = styled.div`
	width: 100%;
	height: 92vh;
	background: ${({ theme }) => theme.colors.dark};
	display: flex;
	flex-direction: column;
`
export const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.2rem;
`

export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

const OfferList = ({ data }: { data: OfferPageDataType[] | string }) => {
	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>(
		{} as OfferPageDataType
	)
	const [showFilters, setShowFilters] = useState(false)
	useEffect(() => {
		setShowFilters(true)
	}, [])
	const listProps = { data, setCurrentOffer, setShowFilters }
	const listHeaderProps = { showFilters, setShowFilters }

	return (
		<Layout>
			<SubContainer>
				<ListContainer>
					<Container>
						<ListHeader {...listHeaderProps} />
						<List {...listProps} />
					</Container>
				</ListContainer>
				{showFilters && <Filters />}
				{currentOffer && !showFilters && <OfferPage offer={currentOffer} />}
				{!currentOffer && !showFilters && (
					<Center>Click on offer card to show details.</Center>
				)}
			</SubContainer>
		</Layout>
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
		console.log('get api/offers/employers: ', data)
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
		devlog(error)
		return { props: { data: 'Failed to load.' }, revalidate: 1 }
	}
}

export default OfferList
