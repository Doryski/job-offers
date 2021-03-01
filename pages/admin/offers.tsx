import { OfferType } from '../../types'
import { GetStaticProps } from 'next'
import AdminTable from '../../components/AdminTable'
import AdminLayout from '../../components/AdminLayout'
import { db } from '../../mysqlSetup'
import devlog from '../../helpers/devlog'
import fixObject from '../../helpers/fixObject'

const OfferList = ({ data }: { data: OfferType[] }) => {
	// TODO: Add multichoice select menu
	const deleteRecord = async (id: string) => {
		async function delOffer(url: string) {
			const res = await fetch(url, {
				method: 'DELETE',
			})
			return res.json()
		}
		await delOffer('/api/admin/offers/' + id)
	}
	const headers = ['uuid', 'title', 'employerId', 'dateAdded']

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
	const sqlGet = `SELECT * FROM offers`
	const result = await db.promise().query(sqlGet)
	const data = fixObject(result[0])
	devlog('select all offers', data)
	return {
		props: {
			data: data || [],
		},
		revalidate: 1,
	}
}
export default OfferList
