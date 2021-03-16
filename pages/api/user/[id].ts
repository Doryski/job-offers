import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/helpers/utils'
import { db } from '@/mysqlSetup'

export default async function ApiUserData(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	console.log('session', session)
	if (!session) {
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })
	}

	if (req.method !== 'GET') {
		return res.status(400).json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}

	const sqlGetUser = `
		SELECT companyName, companySize, email,
        street, city, accountType
        FROM employers
		WHERE uuid = ?
		`
	const [result] = await db.promise().query(sqlGetUser, [req.query.id])
	console.log(result[0])
	return res.status(200).json({
		method: req.method,
		data: result[0],
	})
}
