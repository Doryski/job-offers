import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Center from '../../components/shared/Center'
import useApi from '../../hooks/useApi'
import useRefreshPage from '../../hooks/useRefreshPage'
import del from '../../helpers/delete'
import NotAuthorized from '../../components/AdminLayout/NotAuthorized'

const ApplicantList = () => {
	// TODO: Add multichoice select menu
	const router = useRouter()
	const [session, loading] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? '/api/admin/applicants' : null
	)

	const { refresh } = useRefreshPage(data, router)
	const headers = [
		'id',
		'uuid',
		'name',
		'email',
		'processInFuture',
		'offerId',
		'employerId',
	]

	const deleteRecord = async (id: string) => {
		await del('/api/admin/applicants/' + id)
		refresh()
	}

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

export default ApplicantList
