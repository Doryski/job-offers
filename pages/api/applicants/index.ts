import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '../../../helpers/utils'
import { db } from '../../../mysqlSetup'
import moment from 'moment'

export default async function ApiApplicants(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET' && req.method !== 'POST') {
		return res.json({
			method: req.method,
			errorMessage: 'Only GET and POST methods are available',
		})
	}

	// post applicant to the offer
	if (req.method === 'POST') {
		const sql = `
		INSERT INTO applicants (
			uuid, name, email, employerId, offerId, introduction, processInFuture, dateApplied) 
		VALUES ?`
		const {
			name,
			email,
			employerId,
			offerId,
			introduction,
			processInFuture,
		} = req.body
		const values = [
			[
				uuid(),
				name,
				email,
				employerId,
				offerId,
				introduction,
				processInFuture,
				moment().format('x'),
			],
		]
		db.query(sql, [values], function (err, result) {
			if (err) return res.json(err)
			console.log('1 record inserted')
			console.log('post result api/applicants', result)
			res.status(200).json({ method: req.method, data: req.body })
		})
		return
	}

	const session = await getSession({ req })
	if (!session)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	// get applicants - for user employer
	const sqlGet = `
		SELECT applicants.name, applicants.email, 
		applicants.introduction, applicants.processInFuture,
		offers.title, offers.dateAdded, offers.tech, offers.empType,
		offers.expLvl, applicants.offerId
		FROM (applicants
			INNER JOIN offers ON applicants.offerId = offers.uuid)
		WHERE applicants.employerId = ?
		`

	db.query(sqlGet, function (err, data) {
		if (err) return res.json(err)
		console.log('get api/applicants', data)
		res.status(200).json({ method: req.method, data })
	})
}
