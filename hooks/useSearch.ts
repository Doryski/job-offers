import { NextRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function useSearch(router: NextRouter) {
	const [search, setSearch] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (search !== e.target.value) {
			setSearch(e.target.value)
		}
	}
	useEffect(() => {
		if (search !== router.query.search) {
			router.push(!search ? '/' : `/?search=${search}`, undefined, {
				shallow: true,
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	return {
		handleChange,
		search,
	}
}
