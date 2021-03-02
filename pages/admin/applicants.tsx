// HAS TO BE MADE REUSABLE
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import devlog from '../../helpers/devlog'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import Center from '../../components/shared/Center'
import useApi from '../../hooks/useApi'
import useRefreshPage from '../../hooks/useRefreshPage'
import { Link } from '@material-ui/core'

const ApplicantList = () => {
	// TODO: Add multichoice select menu
	const router = useRouter()
	const [session, loading] = useSession()
	const { data, error, dataLoading } = useApi(
		session ? '/api/admin/applicants' : null
	)
	devlog(data)
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

	const deleteRecord = async (url: string, id: string) => {
		async function delApplicant(apiUrl) {
			const res = await fetch(apiUrl, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delApplicant(url + id)
		refresh()
	}

	if (!session?.user?.admin) {
		return (
			<Center height='100vh'>
				You are not authorized to see this page. Go back to{' '}
				<Link href='/'>
					<a>homepage</a>
				</Link>
			</Center>
		)
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

export default ApplicantList
