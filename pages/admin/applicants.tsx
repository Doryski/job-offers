import ApplicantType from '../../types/ApplicantType'
import { HOST_PATH } from '../../helpers/utils'
import { GetStaticProps } from 'next'
import { Dashboard } from '@material-ui/icons'

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(HOST_PATH + '/api/applicants', {
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	console.log(res)
	// if (res.status === 500) { return console.log(res) }
	const data = res.status === 200 ? await res.json() : 'Error'

	return {
		props: {
			applicants: data,
		},
	}
}

const ApplicantList = ({ applicants }) => {
	const onSubmit = (e) => {
		e.preventDefault()
		async function postData(url = '', data = {}) {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			return response.json()
		}
		postData(HOST_PATH + '/api/applicants', {
			name: 'Domin',
			lastName: 'Rych',
			email: 'dandnas@das.com',
		})
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<button type='submit'>Add applicant</button>
			</form>
			<div>{JSON.stringify(applicants)}</div>
		</>
	)
}
// 'id','name','surname''email'
// <ul>{applicants.map((applicant: ApplicantType) => {
// 	return (
// 		<li>{JSON.stringify(applicant, null, 2)}</li>
// 	)
// })}</ul>

export default ApplicantList
