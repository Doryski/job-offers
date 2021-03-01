import { ApplicantType } from '../../types'
import { GetStaticProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import { db } from '../../mysqlSetup'
import devlog from '../../helpers/devlog'

const ApplicantList = ({ data }: { data: ApplicantType[] }) => {
	// TODO: Add multichoice select menu

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
		async function delApplicant(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delApplicant('/api/applicants/' + id)
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

export const getStaticProps: GetStaticProps = async () => {
	const sqlGet = `SELECT * FROM applicants`
	const result = await db.promise().query(sqlGet)
	const data = JSON.parse(JSON.stringify(result[0]))
	devlog('select all applicants', data)
	devlog(JSON.parse(JSON.stringify(data)))
	return {
		props: {
			data: data || [],
		},
		revalidate: 1,
	}
}
export default ApplicantList
