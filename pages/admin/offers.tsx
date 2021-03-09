// HAS TO BE MADE REUSABLE
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import devlog from '../../debug/devlog'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import useApi from '../../hooks/useApi'
import Center from '../../components/shared/Center'
import useRefreshPage from '../../hooks/useRefreshPage'
import { Link } from '@material-ui/core'
import del from '../../helpers/delete'
import NotAuthorized from '../../components/AdminLayout/NotAuthorized'

const OfferList = () => {
	// TODO: Add multichoice select menu
	const router = useRouter()
	const [session, loading] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? '/api/admin/offers' : null
	)
	devlog(data)
	const { refresh } = useRefreshPage(data, router)
	const deleteRecord = async (id: string) => {
		await del('/api/admin/offers/' + id)
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
			{data && (
				<AdminTable
					data={data.data}
					headers={headers}
					uniqueKey={'uuid'}
					deleteRecord={deleteRecord}
				/>
			)}
		</AdminLayout>
	)
}

export default OfferList
