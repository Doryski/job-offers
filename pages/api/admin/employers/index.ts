import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '../../../../helpers/utils'
import { db } from '../../../../mysqlSetup'

export default async function ApiAdminEmployers(
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

	// get employers - for user employer
	const sqlGet = `SELECT uuid, email, companyName, companySize, 
	dateAdded, street, city, isAdmin, accountType 
	FROM employers`

	db.query(sqlGet, function (err, data) {
		if (err) return res.json(err)
		console.log('get api/employers', data)
		res.status(200).json({ method: req.method, data })
	})
}
