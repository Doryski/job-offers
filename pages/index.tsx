import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { GetStaticProps } from 'next'
import { CircularProgress } from '@material-ui/core'
import ListHeader from '../components/OfferList/ListHeader'
import Center from '../components/shared/Center'
import Layout from '../components/Layout'
import { HOST_PATH } from '../helpers/utils'
import OfferType from '../types/OfferType'

const List = dynamic(() => import('../components/OfferList/List'), {
	loading: () => (
		<Center>
			<CircularProgress />
		</Center>
	),
})
export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(HOST_PATH + '/api/offers')
	const data: OfferType[] = await res.json()

	return {
		props: {
			offers: data,
		},
	}
}

const OfferList = ({ offers }) => {
	return (
		<Layout>
			<Container>
				<ListHeader />
				<ContainerScroll>
					<List offers={offers} />
				</ContainerScroll>
			</Container>
		</Layout>
	)
}

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

export default OfferList
