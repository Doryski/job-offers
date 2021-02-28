import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../mysqlSetup'

export default async function ApiAdminApplicants(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(200).json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}
	console.log('RAN')
	const sqlGet = `SELECT id, uuid, email, companyName, companySize,
	street, city, isAdmin, accountType
	FROM employers`

	const [data] = await db.promise().query(sqlGet)
	console.log('api/admin/employers', data)
	return res.status(200).json({ method: req.method, data: data })
}
