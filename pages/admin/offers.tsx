import { OfferType } from '../../types'
import { GetServerSideProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import useRefreshPage from '../../helpers/useRefreshPage'
import { useRouter } from 'next/router'
import moment from 'moment'
import { getSession } from 'next-auth/client'
import { DATE_FORMAT } from '../../helpers/utils'
import getDomain from '../../helpers/getDomain'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session?.user.admin) return { notFound: true }
	const res = await fetch(getDomain() + '/api/admin/offers')
	const { data }: { data: OfferType[] } = await res.json()
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

const OfferList = ({ data }: { data: OfferType[] }) => {
	// TODO: Add multichoice select menu
	// const headers = Object.keys(data[0])
	const router = useRouter()
	const { isRefreshing, refresh } = useRefreshPage(data, router)

	const deleteRecord = async (id: string) => {
		async function delOffer(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delOffer('/api/admin/offers/' + id)
		refresh()
	}
	const headers = ['uuid', 'title', 'employerId', 'dateAdded']

	return (
		<AdminLayout>
			<AdminTable
				data={data}
				headers={headers}
				uniqueKey={'uuid'}
				deleteRecord={deleteRecord}
			/>
		</AdminLayout>
	)
}

export default OfferList
