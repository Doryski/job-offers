import styled from 'styled-components'
import { GetStaticProps } from 'next'
import ListHeader from '../components/OfferList/ListHeader'
import Layout from '../components/Layout'
import { OfferPageDataType } from '../types'
import List from '../components/OfferList/List'
import Center from '../components/shared/Center'
import OfferHeader from '../components/OfferPage/OfferHeader'
import OfferTechStack from '../components/OfferPage/OfferTechStack'
import OfferDescription from '../components/OfferPage/OfferDescription'
import OfferApplySection from '../components/OfferPage/OfferApplySection'
import { useState } from 'react'
import { DATE_FORMAT, DOMAIN } from '../helpers/utils'
import moment from 'moment'
import Filters from '../components/Filters'
import { db } from '../mysqlSetup'

export const getStaticProps: GetStaticProps = async () => {
	// const res = await fetch(DOMAIN + '/api/offers/employers')
	// const { data }: { data: OfferPageDataType[] } = await res.json()
	const sqlGet = `SELECT offers.uuid AS offerId, offers.title,
    offers.tech, offers.empType, offers.expLvl,
    offers.salaryFrom, offers.salaryTo, 
    offers.technology, offers.description, offers.dateAdded, 
    employers.companyName, employers.companySize,
    employers.street, employers.city,
    employers.uuid AS employerId 
    FROM (offers
    INNER JOIN employers ON offers.employerId = employers.uuid)`

	const [data] = await db.promise().query(sqlGet)
	// @ts-ignore
	const fixed = (data || []).map((el) => ({
		...el,
		dateAdded: moment(el.dateAdded).format(DATE_FORMAT),
	}))
	return {
		props: {
			data: fixed,
		},
	}
}

const OfferList = ({ data }) => {
	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>()

	return (
		<Layout>
			<Filters />
			<SubContainer>
				<ListContainer>
					<ListContainerScroll>
						<Container>
							<ListHeader />
							<ContainerScroll>
								<List data={data} setCurrentOffer={setCurrentOffer} />
							</ContainerScroll>
						</Container>
					</ListContainerScroll>
				</ListContainer>
				<OfferContainer>
					<OfferContainerScroll>
						{!currentOffer ? (
							<Center>Click on offer card to show details.</Center>
						) : (
							<>
								<OfferHeader offer={currentOffer} />
								<OfferTechStack technology={currentOffer.technology} />
								<OfferDescription description={currentOffer.description} />
								<OfferApplySection offer={currentOffer} />
							</>
						)}
					</OfferContainerScroll>
				</OfferContainer>
			</SubContainer>
		</Layout>
	)
}
export const SubContainer = styled.div`
	display: flex;
	flex: 1;
`
export const ListContainer = styled.div`
	width: 55%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	@media (max-width: 1025px) {
		width: 100%;
	}
`
export const ListContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`
export const ContainerScroll = styled.div`
	display: flex;
	position: relative;
	flex: 1 1 0%;
`

export const InfoSpan = styled.span`
	display: block;
	color: ${({ theme }) => theme.colors.title};
	font-size: 1.2rem;
`
export const OfferContainer = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1.25em 0 0;
	position: relative;
	flex: 1 1 0%;
`
export const OfferContainerScroll = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 0.9375em 0 0;
	overflow: auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 0.1875em;
	}
`

export const ProgressWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 2.5em;
`

export default OfferList
