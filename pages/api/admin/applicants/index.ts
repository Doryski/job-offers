import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/helpers/utils'
import { db } from '@/mysqlSetup'

export default async function ApiAdminApplicants(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (!session?.user.admin)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	if (req.method !== 'GET') {
		return res.json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}

	const sqlGet = `SELECT * FROM applicants`

	db.query(sqlGet, function (err, data) {
		if (err) return res.json(err)
		console.log('get api/applicants', data)
		res.status(200).json({ method: req.method, data })
	})
}
