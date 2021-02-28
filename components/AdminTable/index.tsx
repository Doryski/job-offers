import { createContext, useState } from 'react'
import styled from 'styled-components'
import BottomSection from './BottomSection'
import Table from './Table'
import TopSection from './TopSection'
type TableContextType = {
	recordsToShow: number
	indexOfFirstRecord: number
	indexOfLastRecord: number
	sortKey
	sortAscending: boolean
	setSortAscending
	handleColumnHeaderClick: Function
	search
	setSearch
	data
	handleFilterChange
	currentPage
	currentRecords
	recordsPerPage
	setRecordsPerPage
	setCurrentPage
	uniqueKey
	deleteRecord?: Function
	editRecord?: Function
}
// @ts-ignore
export const TableContext = createContext<TableContextType>({})

const AdminTable = ({
	data,
	headers,
	uniqueKey,
	deleteRecord,
	editRecord,
}: {
	data: Array<any>
	headers: Array<string>
	uniqueKey: string
	deleteRecord?: Function
	editRecord?: Function
}) => {
	console.log('OFFERS TABLE:')
	console.log('data:', data)
	console.log('headers:', headers)
	console.log('uniqueKey:', uniqueKey)
	console.log('deleteRecord', deleteRecord)

	// sorting
	const [sortKey, setSortKey] = useState<string>('')
	const [sortAscending, setSortAscending] = useState<boolean>(true)

	const handleColumnHeaderClick = (key: string) => {
		if (key === sortKey) {
			setSortAscending((prevDirection) => !prevDirection)
		} else {
			setSortAscending(true)
		}
		setSortKey(key)
	}

	// filtering
	const [search, setSearch] = useState('')

	const handleFilterChange = (e) => {
		const value = e.target.value || ''
		setSearch(value)
		setCurrentPage(1)
	}

	// pagination
	const [currentPage, setCurrentPage] = useState(1)
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
				deleteRecord: deleteRecord ?? deleteRecord,
				editRecord: editRecord ?? editRecord,
			}}>
			<TableWrapper>
				<TopSection />
				<Table headers={headers} uniqueKey={uniqueKey} />
				<BottomSection />
			</TableWrapper>
		</TableContext.Provider>
	)
}

const TableWrapper = styled.section`
	width: 100%;
	margin: auto;
`
export default AdminTable
