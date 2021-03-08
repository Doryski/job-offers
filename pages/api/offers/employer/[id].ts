import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '../../../../helpers/utils'
import { db } from '../../../../mysqlSetup'

export default async function ApiMyOfferId(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (!session)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	if (req.method !== 'GET') {
		return res.status(200).json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}

	// get offer by id of current user only
	const sqlGet = `SELECT offers.uuid AS offerId, offers.title, 
    offers.empType, offers.expLvl,
    offers.salaryFrom, offers.salaryTo, 
    offers.technology, offers.description, offers.dateAdded
    FROM (offers
    INNER JOIN employers ON offers.employerId = employers.uuid)
    WHERE offers.employerId = ? AND offers.uuid = ?
    `

	db.query(sqlGet, [session.user.id, req.query.id], function (err, data) {
		if (err) return res.json(err)
		console.log('api/offers/myoffers', data)
		res.status(200).json({ method: req.method, data })
	})
}
