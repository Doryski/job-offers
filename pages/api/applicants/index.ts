import { NextApiRequest, NextApiResponse } from 'next'
import uuid from 'react-uuid'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/utils/vars'
import { db } from '@/mysqlSetup'
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
		const [result] = await db.promise().query(sql, [values])
		console.log('Someone just applied:')
		console.log('post api/applicants', result)
		return res.status(200).json({ method: req.method, data: req.body })
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

	db.query(sqlGet, (err, data) => {
		if (err) return res.json(err)
		console.log('get api/applicants', data)
		return res.status(200).json({ method: req.method, data })
	})
}
