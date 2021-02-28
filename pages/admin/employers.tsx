import { EmployerType } from '../../types'
import { GetServerSideProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import useRefreshPage from '../../helpers/useRefreshPage'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'
import getDomain from '../../helpers/getDomain'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session?.user.admin) return { notFound: true }
	const res = await fetch(getDomain() + '/api/admin/employers')
	const { data }: { data: EmployerType[] } = await res.json()
	console.log('/api/admin/employers data:', data)
	return {
		props: {
			data: data || [],
		},
	}
}

const EmployerList = ({ data }: { data: EmployerType[] }) => {
	// TODO: Add multichoice select menu
	// const headers = Object.keys(data[0])

	const router = useRouter()
	const { refresh } = useRefreshPage(data, router)
	const deleteRecord = (id: string) => {
		async function delEmployer(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			refresh()
			return await res.json()
		}
		delEmployer('/api/employers/' + id)
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
