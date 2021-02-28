import { EmployerType } from '../types'
import { useEffect, useState } from 'react'

export default function fetchEmployerById(id: string) {
	const [employer, setEmployer] = useState<EmployerType>()

	useEffect(() => {
		async function getEmployer() {
			const res = await fetch('http://localhost:3000/api/employers' + id)
			const data: EmployerType = await res.json()
			setEmployer(data)
		}
		getEmployer()
	}, [])

	return employer
}
