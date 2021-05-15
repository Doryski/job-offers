import { NextRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function useSearch(router: NextRouter) {
	const [search, setSearch] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	useEffect(() => {
		router.push(!search ? '/' : `/?search=${search}`, undefined, {
			shallow: true,
		})
	}, [search])

	useEffect(() => {
		setSearch((router?.query?.search ?? '') as string)
	}, [router?.query?.search])

	return {
		handleChange,
		search,
	}
}
