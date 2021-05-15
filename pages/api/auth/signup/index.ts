import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/mysqlSetup'
import uuid from 'react-uuid'
import bcrypt from 'bcrypt'
import { getSession } from 'next-auth/client'
import moment from 'moment'
import fixObject from '@/helpers/fixObject'

export default async function signup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })
	if (session) {
		return res.status(400).json({
			message: `You are already signed in as ${session?.user?.email}.`,
		})
	}
	if (req.method !== 'POST') {
		return res.status(401).json({
			method: req.method,
			errorMessage: 'Only POST method is available',
		})
	}

	const { companyName, companySize, email, street, city, password } = req.body
	return bcrypt.hash(password, 10, async (err, hash) => {
		if (err) return console.error(err)
		const IS_ADMIN_DEFAULT = 0
		const ACCOUNT_TYPE_DEFAULT = 'basic'

		const values = [
			[
				uuid(), // default
				companyName,
				companySize,
				email,
				street,
				city,
				hash, // password
				IS_ADMIN_DEFAULT,
				moment().format('x'), // dateAdded default
				ACCOUNT_TYPE_DEFAULT,
			],
		]
		const [
			emailsCount,
		] = await db
			.promise()
			.query('SELECT count(*) AS `count` FROM employers WHERE email = ?', [
				email,
			])
		const isEmailUnique = fixObject(emailsCount)[0].count === 0
		if (!isEmailUnique) {
			console.warn('Email is not unique')
			return res.status(400).json({
				errorMessage: `Account with this email already exists, 
                    try another email or log in to existing account`,
			})
		}

		const sql = `
                INSERT INTO employers (
                uuid, companyName, companySize, email, street, 
				city, password, isAdmin, dateAdded, accountType) 
                VALUES ?
                `
		const [result] = await db.promise().query(sql, [values])
		if (result) {
			console.log('New user was created:')
			console.log('post api/auth/signup', result)
		}
		return res.status(200).json({
			method: req.method,
			message: 'New account was successfully created',
		})
	})
}
