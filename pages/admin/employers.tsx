import EmployerType from '../../types/EmployerType';
import { HOST_PATH } from '../../helpers/utils';
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(HOST_PATH + '/api/employers', {
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	})
	console.log(res)
	// if (res.status === 500) { return console.log(res) }
	const data = res.status === 200 ? await res.json() : 'Error'

	return {
		props: {
			employers: data,
		},
	}
}

const EmployerList = ({ employers }) => {
	return (<div>{JSON.stringify(employers)}</div>
	)
}
// 'id','name','surname''email'
// <ul>{employers.map((employer: EmployerType) => {
// 	return (
// 		<li>{JSON.stringify(employer, null, 2)}</li>
// 	)
// })}</ul>

export default EmployerList
