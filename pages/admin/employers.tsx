import { EmployerType } from '../../types'
import { GetStaticProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import { db } from '../../mysqlSetup'
import devlog from '../../helpers/devlog'

const EmployerList = ({ data }: { data: EmployerType[] }) => {
	// TODO: Add multichoice select menu
	const deleteRecord = async (id: string) => {
		async function delEmployer(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delEmployer('/api/employers/' + id)
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
export const getStaticProps: GetStaticProps = async () => {
	const sqlGet = `SELECT id, uuid, email, companyName, 
	companySize, street, city, isAdmin, accountType
	FROM employers`
	const result = await db.promise().query(sqlGet)
	const data = JSON.parse(JSON.stringify(result[0]))
	devlog('select all employers', data)
	devlog(JSON.parse(JSON.stringify(data)))
	return {
		props: {
			data: data || [],
		},
		revalidate: 1,
	}
}

export default EmployerList
