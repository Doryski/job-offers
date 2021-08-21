import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/utils/vars'
import { db } from '@/mysqlSetup'

export default async function ApiMyOffers(
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

	const sqlGet = `
	SELECT offers.uuid AS offerId, offers.title, offers.empType, 
	offers.expLvl, offers.salaryFrom, offers.salaryTo, 
    offers.technology, offers.description, offers.dateAdded
    FROM (offers INNER JOIN employers ON offers.employerId = employers.uuid)
    WHERE offers.employerId = ?;
    `

	db.query(sqlGet, [session?.user?.id], (err, data) => {
		if (err) return res.json(err)
		console.info('api/offers/employer', data)
		return res.status(200).json({ method: req.method, data })
	})
}
