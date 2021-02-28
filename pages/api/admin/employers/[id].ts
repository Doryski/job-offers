import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '../../../../helpers/utils'
import { db } from '../../../../mysqlSetup'

export default async function ApiAdminOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	console.log(session)
	if (!session?.user.admin)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	// if (req.method !== 'GET') {
	// 	return res.status(200).json({
	// 		method: req.method,
	// 		errorMessage: 'Only GET method is available',
	// 	})
	// }

	if (req.method === 'DELETE') {
		const sqlDelOffer = `
		DELETE FROM employers 
		WHERE uuid = ?
		`
		db.query(sqlDelOffer, [req.query.id], function (err, result) {
			if (err) res.json(err)
			console.log('del api/employers/[id]', result)
			res.status(200).json({
				method: req.method,
				message: `Deleted 1 record with id of ${req.query.id}`,
			})
		})
		return
	}
}
