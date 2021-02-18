import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getApplicantById(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		console.log('Only GET method is available')
	}
	// (name, lastName, email, cv, uuid)
	const sqlGet = "SELECT * FROM applicants WHERE uuid = ?"
	await db.query(sqlGet, [req.query.id], function (err, result) {
		if (err) return console.log(err);
		console.log(result);
		res.status(200).json(result)

	});
}
