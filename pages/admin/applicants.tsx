import { ApplicantType } from '../../types'
import { GetServerSideProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import useRefreshPage from '../../helpers/useRefreshPage'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session?.user.admin) return { notFound: true }
	const res = await fetch('http://localhost:3000/api/admin/applicants')
	const { data }: { data: ApplicantType[] } = await res.json()
	console.log('/api/admin/applicants data:', data)
	return {
		props: {
			data: data || [],
		},
	}
}

const ApplicantList = ({ data }: { data: ApplicantType[] }) => {
	// TODO: Add multichoice select menu
	// const headers = Object.keys(data[0])
	const headers = [
		'id',
		'uuid',
		'name',
		'email',
		'processInFuture',
		'offerId',
		'employerId',
	]

	const router = useRouter()
	const { refresh } = useRefreshPage(data, router)

	const deleteRecord = async (id: string) => {
		async function delApplicant(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delApplicant('/api/applicants/' + id)
		refresh()
	}

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

export default ApplicantList
