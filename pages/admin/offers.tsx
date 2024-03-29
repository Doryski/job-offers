import AdminTable from '@/components/AdminTable'
import AdminLayout from '@/components/AdminLayout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import useApi from '@/hooks/useApi'
import Center from '@/components/shared/Center'
import useRefreshPage from '@/hooks/useRefreshPage'
import del from '@/helpers/delete'
import NotAuthorized from '@/components/AdminLayout/NotAuthorized'

const OfferList = () => {
	const router = useRouter()
	const [session, loading] = useSession()
	const { data, error, loading: dataLoading } = useApi(
		session ? '/api/admin/offers' : null
	)

	const { refresh } = useRefreshPage(data, router)
	const deleteRecord = async (id: string) => {
		await del(`/api/admin/offers/${id}`)
		refresh()
	}
	const headers = ['uuid', 'title', 'employerId', 'dateAdded']
	if (!session?.user?.admin) {
		return <NotAuthorized />
	}

	return (
		<AdminLayout>
			{error && <Center>Failed to load.</Center>}
			{(dataLoading || loading) && <Center>Loading...</Center>}
			{data?.data && (
				<AdminTable
					data={data.data}
					headers={headers}
					uniqueKey='uuid'
					deleteRecord={deleteRecord}
				/>
			)}
		</AdminLayout>
	)
}

export default OfferList
