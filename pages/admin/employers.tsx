import { EmployerType } from '../../types'
import { GetServerSideProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import devlog from '../../helpers/devlog'
import getDomain from '../../helpers/getDomain'
import { useRouter } from 'next/router'
import useRefreshPage from '../../helpers/useRefreshPage'
import { getSession, useSession } from 'next-auth/client'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session?.user.admin) return { notFound: true }
	const res = await fetch(getDomain() + '/api/admin/employers')
	const { data }: { data: EmployerType } = await res.json()
	devlog('select all employers', data)
	return {
		props: {
			data: data || [],
		},
	}
}

const EmployerList = ({ data }: { data: EmployerType[] }) => {
	// TODO: Add multichoice select menu
	const router = useRouter()
	const [session, loading] = useSession()
	if (loading) return <div>Loading admin page...</div>
	if (!session?.user?.admin) {
		router.push('/')
		return <div>You are not authorized to see this page.</div>
	}

	const { refresh } = useRefreshPage(data, router)

	const deleteRecord = async (id: string) => {
		async function delEmployer(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delEmployer('/api/employers/' + id)
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

export default EmployerList
