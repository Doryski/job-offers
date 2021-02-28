import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../mysqlSetup'
import { compare } from 'bcrypt'
import { getSession } from 'next-auth/client'
import { getToken } from 'next-auth/jwt'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })
	const token = await getToken({ req, secret: process.env.JWT_SECRET })
	console.log('api/auth/login session:', session)
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
	const errorMessage = 'Ups, something went wrong!'
	if (req.method === 'POST') {
		const sqlGetPassword = `SELECT uuid, password, isAdmin 
		FROM employers 
		WHERE email = ?`
		const [result] = await db.promise().query(sqlGetPassword, [req.body.email])
		if (!result[0]?.password) return res.status(400).json({ errorMessage })

		const { uuid: userId, password, isAdmin } = result[0]
		console.log(result[0])
		compare(req.body.password, password, (err, isPasswordMatching) => {
			if (err) return console.log(err)
			console.log('is password the same', isPasswordMatching)
			if (isPasswordMatching) {
				console.log(`User ${req.body.email} logged in`)
				console.log('admin: ', isAdmin)
				console.log('is admin?: ', isAdmin === 1)
				return res.status(200).json({
					id: userId,
					admin: isAdmin === 1,
					message: 'You were successfully authorized',
				})
			}
			return res.status(400).json({ errorMessage })
		})
	}
	return
}
