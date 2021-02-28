import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../mysqlSetup'
import uuid from 'react-uuid'
import { hash } from 'bcrypt'
import { getSession } from 'next-auth/client'
import moment from 'moment'

export default async function signup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (session) {
		return res
			.status(400)
			.json({ message: `You are already signed in as ${session.user.email}.` })
	}
	if (req.method !== 'POST') {
		return res.status(405).json({
			method: req.method,
			errorMessage: 'Only POST method is available',
		})
	}
	// works
	if (req.method === 'POST') {
		const { companyName, companySize, email, street, city, password } = req.body
		hash(password, 10, async function (err, hash) {
			if (err) return console.log(err)

			const values = [
				[
					uuid(),
					companyName,
					companySize,
					email,
					street,
					city,
					hash,
					JSON.stringify([]),
					0,
					moment().format('x'),
				],
			]
			const [
				emailsCount,
			] = await db
				.promise()
				.query('SELECT count(*) AS `count` FROM employers WHERE email = ?', [
					email,
				])
			const isEmailUnique = emailsCount[0]['count'] === 0
			if (!isEmailUnique) {
				console.log('Email is not unique')
				return res.status(400).json({
					errorMessage: `Account with this email already exists, 
                    try another email or log in to existing account`,
				})
			}

			const sql = `
                INSERT INTO employers (
                uuid, companyName, companySize, email, street, 
				city, password, offerId, isAdmin, dateAdded) 
                VALUES ?
                `
			db.query(sql, [values], function (err, result) {
				if (err) return console.log(err)
				console.log('New user was created:')
				console.log('post api/auth/signup', result)
				res.status(200).json({
					method: req.method,
					message: 'New account was successfully created',
				})
			})
			return
		})
	}
}
