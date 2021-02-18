import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getEmployers(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET" && req.method !== "POST") {
		console.log('Only GET and POST methods are available')
	}
	const cols = 'companyName, companySize, email, street, city, uuid'
	if (req.method === "POST") {
		const { companyName, companySize, email, street, city } = req.body
		const values = [[companyName, companySize, email, street, city, uuid()]]
		const sql = `INSERT INTO employers (${cols}) VALUES ?`;
		await db.query(sql, [values], function (err, result) {
			if (err) return console.log(err);
			console.log("1 record inserted");
			console.log(result);
			res.status(200).json({ method: "POST", data: result })
		});
		return
	};
	const sqlGet = `SELECT ${cols} FROM employers`
	await db.query(sqlGet, function (err, result) {
		if (err) return console.log(err);
		console.log(result);
		res.status(200).json(result)

	});
}
