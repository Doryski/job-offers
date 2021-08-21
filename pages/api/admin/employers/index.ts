import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/utils/vars'
import { db } from '@/mysqlSetup'

export default async function ApiAdminEmployers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (!session?.user?.admin)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	if (req.method !== 'GET') {
		return res.json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}

	const sqlGet = `SELECT uuid, email, companyName, companySize, 
	dateAdded, street, city, isAdmin, accountType 
	FROM employers`

	db.query(sqlGet, (err, data) => {
		if (err) return res.json(err)
		console.info('get api/employers', data)
		return res.status(200).json({ method: req.method, data })
	})
}
