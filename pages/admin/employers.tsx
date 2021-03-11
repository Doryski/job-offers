import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import { useRouter } from 'next/router'
import useRefreshPage from '../../hooks/useRefreshPage'
import { useSession } from 'next-auth/client'
import useApi from '../../hooks/useApi'
import Center from '../../components/shared/Center'
import del from '../../helpers/delete'
import NotAuthorized from '../../components/AdminLayout/NotAuthorized'

const EmployerList = () => {
	// TODO: Add multichoice select menu
	const router = useRouter()
	const [session, loading] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? '/api/admin/employers' : null
	)
	const { refresh } = useRefreshPage(data, router)

	const deleteRecord = async (id: string) => {
		await del('/api/employers/' + id)
		refresh()
	}

	const headers = [
		'isAdmin',
		'id',
		'uuid',
		'companyName',
		'email',
		'city',
		'accountType',
	]
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

export default EmployerList
