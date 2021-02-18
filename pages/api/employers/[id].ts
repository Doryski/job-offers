import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getEmployerById(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		console.log('Only GET method is available')
	}
	// (companyName, companySize, email, street, city, uuid)
	const sqlGet = "SELECT * FROM employers WHERE uuid = ?"
	await db.query(sqlGet, [req.query.id], function (err, result) {
		if (err) return console.log(err);
		console.log(result);
		res.status(200).json(result)

	});
}
