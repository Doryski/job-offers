import { EmployerType } from '../types'
import { useEffect, useState } from 'react'
import { DOMAIN } from './utils'

export default function fetchEmployerById(id: string) {
	const [employer, setEmployer] = useState<EmployerType>()

	useEffect(() => {
		async function getEmployer() {
			const res = await fetch(DOMAIN + '/api/employers' + id)
			const data: EmployerType = await res.json()
			setEmployer(data)
		}
		getEmployer()
	}, [])

	return employer
}
