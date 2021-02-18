import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { db } from '../../../mysqlSetup'

export default async function getApplicants(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET' && req.method !== 'POST') {
		console.log('Only GET and POST methods are available')
	}
	if (req.method === 'POST') {
		const sql = 'INSERT INTO applicants (name, lastName, email, uuid) VALUES ?'
		const { name, lastName, email } = req.body
		const values = [[name, lastName, email, uuid()]]
		db.query(sql, [values], function (err, result) {
			if (err) return console.log(err)
			console.log('1 record inserted')
			console.log(result)
			// res.status(200).json({ method: 'POST', data: result })
		})
		return
	}
	const cols = 'name, lastName, email, cv, uuid'
	const sqlGet = `SELECT ${cols} FROM applicants`
	db.query(sqlGet, function (err, result) {
		if (err) return console.log(err)
		console.log(result)
		res.status(200).json(result)
	})
	return
}
