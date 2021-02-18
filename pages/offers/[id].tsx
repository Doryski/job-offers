import styled from 'styled-components'
import OfferHeader from '../../components/OfferPage/OfferHeader'
import OfferTechStack from '../../components/OfferPage/OfferTechStack'
import OfferDescription from '../../components/OfferPage/OfferDescription'
import OfferApplySection from '../../components/OfferPage/OfferApplySection'
import Center from '../../components/shared/Center'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import OfferType from '../../types/OfferType'
import { HOST_PATH } from '../../helpers/utils'

export const Container = styled.div`
	flex: 1;
	background: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	padding: 0 1.25em;
	position: relative;
	flex: 1 1 0%;
`
export const ContainerScroll = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	padding: 0 0.9375em;
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

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(HOST_PATH + '/api/offers/')
	const data: OfferType[] = await res.json()
	const paths = data.map(({ uuid }) => ({
		params: { uuid },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { uuid } = params
	const res = await fetch((HOST_PATH + '/api/offers/' + uuid) as string)
	const data: OfferType = await res.json()
	return {
		props: {
			offer: data,
		},
	}
}

const OfferPage = ({ offer }) => {
	return (
		<Layout>
			<Container>
				<ContainerScroll>
					{!offer ? (
						<Center>Error loading offer</Center>
					) : (
						<>
							<OfferHeader offer={offer} />
							<OfferTechStack technology={offer.technology} />
							<OfferDescription description={offer.description} />
							<OfferApplySection />
						</>
					)}
				</ContainerScroll>
			</Container>
		</Layout>
	)
}

export default OfferPage
