import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../mysqlSetup'

export default async function getOffersWithEmployers(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(200).json({
			method: req.method,
			errorMessage: 'Only GET method is available',
		})
	}
	// get all offers with employers
	const sqlGet = `SELECT offers.uuid AS offerId, offers.title,
    offers.tech, offers.empType, offers.expLvl,
    offers.salaryFrom, offers.salaryTo, 
    offers.technology, offers.description, offers.dateAdded, 
    employers.companyName, employers.companySize,
    employers.street, employers.city,
    employers.uuid AS employerId 
    FROM (offers
    INNER JOIN employers ON offers.employerId = employers.uuid)`

	db.query(sqlGet, function (err, data) {
		if (err) return res.json(err)
		console.log('api/offers/employers', data)
		res.status(200).json({ method: req.method, data })
	})
}
