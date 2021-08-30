import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/mysqlSetup'
import { compare } from 'bcrypt'
import { getSession } from 'next-auth/client'
import fixObject from 'utils/fixObject'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })
	console.info('api/auth/login session:', session)
	if (session) {
		return res.status(400).json({
			message: `You are already signed in as ${session?.user?.email}.`,
		})
	}
	if (req.method !== 'POST') {
		return res.status(405).json({
			method: req.method,
			errorMessage: 'Only POST method is available',
		})
	}

	const errorMessage = 'Ups, something went wrong!'
	const sqlGetPassword = `SELECT uuid, password, isAdmin 
		FROM employers 
		WHERE email = ?`
	const [result] = await db.promise().query(sqlGetPassword, [req.body.email])
	const resultObj = fixObject(result)
	if (!resultObj[0]?.password) return res.status(400).json({ errorMessage })

	const { uuid: userId, password, isAdmin } = resultObj[0]

	return compare(req.body.password, password, (err, isPasswordMatching) => {
		if (err) {
			console.error(err)

			return res.status(401).json({
				errorMessage,
			})
		}
		console.info('Is password the same: ', isPasswordMatching)
		if (isPasswordMatching) {
			console.info(`User ${req.body.email} logged in`)
			console.info('Is user admin: ', isAdmin === 1)
			return res.status(200).json({
				id: userId,
				admin: isAdmin === 1,
				message: 'You were successfully authorized',
			})
		}
		return res.status(400).json({ errorMessage })
	})
}
