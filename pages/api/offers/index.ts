import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { UNAUTHORIZED_ERROR } from '@/helpers/utils'
import { db } from '@/mysqlSetup'
import uuid from 'react-uuid'
import moment from 'moment'

export default async function ApiOffers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (!session)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	if (req.method !== 'GET' && req.method !== 'POST') {
		return res.status(400).json({
			method: req.method,
			errorMessage: 'Only GET and POST methods are available',
		})
	}

	if (req.method === 'POST') {
		const offerId = uuid()

		const sqlAddOffer = `
        INSERT INTO offers (
			employerId, tech, title, empType, expLvl, 
			salaryFrom, salaryTo, technology, 
			description, uuid, dateAdded) 
		VALUES ?
        `
		const {
			tech,
			title,
			empType,
			expLvl,
			salaryFrom,
			salaryTo,
			technology,
			description,
		} = req.body
		const values = [
			[
				session.user.id,
				tech,
				title,
				empType,
				expLvl,
				salaryFrom,
				salaryTo,
				technology,
				description,
				offerId,
				moment().format('x'),
			],
		]
		db.query(sqlAddOffer, [values], function (err, result) {
			if (err) return res.json(err)
			console.log('post api/offers:', result)
			res.json({
				method: req.method,
				message: 'Offer was added successfully!',
				data: req.body,
			})
		})
		return
	}
	if (!session.user.admin)
		return res.status(401).json({ errorMessage: UNAUTHORIZED_ERROR })

	const sqlGet = `
		SELECT uuid, tech, title, empType, expLvl, 
		salaryFrom, salaryTo, technology, 
		dateAdded, description, employerId
		FROM offers
    `

	db.query(sqlGet, function (err, data) {
		if (err) return res.json(err)
		console.log('get api/offers', data)
		return res.json({ method: req.method, data })
	})
}
