import { EmployerType } from '../types'
import { useEffect, useState } from 'react'
import getDomain from './getDomain'

export default function fetchEmployerById(id: string) {
	const [employer, setEmployer] = useState<EmployerType>()

	useEffect(() => {
		async function getEmployer() {
			const res = await fetch(getDomain() + '/api/employers' + id)
			const data: EmployerType = await res.json()
			setEmployer(data)
		}
		getEmployer()
	}, [])

	return employer
}
