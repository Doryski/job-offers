import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getOffers(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET" && req.method !== "POST") {
		console.log('Only GET and POST methods are available')
	}
	// if (req.method === "POST") {
	// 	const sql = "INSERT INTO offers (companyName, companySize, email, street, city, uuid) VALUES ?";
	// 	const { companyName, companySize, email, street, city } = req.body
	// 	const values = [[companyName, companySize, email, street, city, uuid()]]
	// 	await db.query(sql, [values], function (err, result) {
	// 		if (err) return console.log(err);
	// 		console.log("1 record inserted");
	// 		console.log(result);
	// 		res.status(200).json({ method: "POST", data: result })
	// 	});
	// 	return
	// };
	const cols = 'companyName, companySize, email, street, city, uuid'
	const sqlGet = `SELECT ${cols} FROM offers`
	await db.query(sqlGet, function (err, result) {
		if (err) return console.log(err);
		console.log(result);
		res.status(200).json(result)

	});
}
