import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getOfferById(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		console.log('Only GET method is available')
	}
	const sqlGet = `SELECT uuid, tech, title, empType, 
	expLvl, salaryFrom, salaryTo, image, 
	technology, dateAdded, descr 
	FROM offers 
	WHERE uuid = ${req.query.id}
	`
	
	await db.query(sqlGet, function (err, result) {
		if (err) return console.log(err);
		console.log(result);
		res.status(200).json(result)

	});
}
