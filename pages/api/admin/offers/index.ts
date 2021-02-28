import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../mysqlSetup'

export default async function ApiMyOfferId(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(200).json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}
	const sqlGet = `SELECT * FROM offers`

	const [data] = await db.promise().query(sqlGet)
	console.log('api/admin/offers', data)
	return res.status(200).json({ method: req.method, data: data })
}
