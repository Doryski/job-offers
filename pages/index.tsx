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
import { DATE_FORMAT } from '../helpers/utils'
import moment from 'moment'
import { db } from '../mysqlSetup'
import fixObject from '../helpers/fixObject'
import devlog from '../debug/devlog'

const OfferList = ({ data }: { data: OfferPageDataType[] | string }) => {
	const [currentOffer, setCurrentOffer] = useState<OfferPageDataType>()

	return (
		<Layout>
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
				</OfferContainer>
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
		const fixed = (data ?? []).map((el: OfferPageDataType) => ({
			...el,
			dateAdded: moment(+el.dateAdded).format(DATE_FORMAT),
		}))
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

export const SubContainer = styled.div`
	display: grid;
	grid-template-columns: 55% auto;
	height: 100%;
`
export const ListContainer = styled.div`
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
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1em 0 0;
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
