import { createContext, Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import BottomSection from './BottomSection'
import Table from './Table'
import TopSection from './TopSection'

export type TableContextType = {
	recordsToShow: number
	indexOfFirstRecord: number
	indexOfLastRecord: number
	sortKey: string
	sortAscending: boolean
	setSortAscending: Dispatch<SetStateAction<boolean>>
	handleColumnHeaderClick: (key: string) => void
	search: string
	setSearch: Dispatch<SetStateAction<string>>
	data: any[]
	handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	currentPage: number
	currentRecords: any[]
	recordsPerPage: number
	setRecordsPerPage: Dispatch<SetStateAction<number>>
	setCurrentPage: Dispatch<SetStateAction<number>>
	uniqueKey: string
	deleteRecord?: Function
	editRecord?: Function
}
export const TableContext = createContext<TableContextType>(
	{} as TableContextType
)

const TableWrapper = styled.section`
	width: 100%;
	margin: auto;
`

const AdminTable = ({
	data,
	headers,
	uniqueKey,
	deleteRecord,
	editRecord,
}: {
	data: any[]
	headers: string[]
	uniqueKey: string
	deleteRecord?: Function
	editRecord?: Function
}) => {
	// sorting
	const [sortKey, setSortKey] = useState<string>('')
	const [sortAscending, setSortAscending] = useState<boolean>(true)

	const handleColumnHeaderClick = (key: string) => {
		if (key === sortKey) {
			setSortAscending(prevDirection => !prevDirection)
		} else {
			setSortAscending(true)
		}
		setSortKey(key)
	}

	// filtering + pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [search, setSearch] = useState('')

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value || ''
		setSearch(value)
		setCurrentPage(1)
	}

	const [recordsPerPage, setRecordsPerPage] = useState(10)
	const indexOfLastRecord = currentPage * recordsPerPage
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
	const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

	return (
		<TableContext.Provider
			value={{
				sortKey,
				sortAscending,
				setSortAscending,
				handleColumnHeaderClick,
				search,
				setSearch,
				data,
				handleFilterChange,
				currentPage,
				currentRecords,
				recordsPerPage,
				setRecordsPerPage,
				recordsToShow: data.length,
				setCurrentPage,
				indexOfFirstRecord,
				indexOfLastRecord,
				uniqueKey,
				deleteRecord,
				editRecord,
			}}>
			<TableWrapper>
				<TopSection />
				<Table headers={headers} uniqueKey={uniqueKey} />
				<BottomSection />
			</TableWrapper>
		</TableContext.Provider>
	)
}

AdminTable.defaultProps = {
	deleteRecord: () => {},
	editRecord: () => {},
}
export default AdminTable
