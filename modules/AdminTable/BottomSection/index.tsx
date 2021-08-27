import { useContext } from 'react'
import { TableContext } from '..'
import Pagination from '../Pagination'
import { Wrapper } from './styled'

const BottomSection = () => {
	const { recordsToShow, indexOfFirstRecord, indexOfLastRecord } = useContext(
		TableContext
	)

	return (
		<Wrapper>
			<span>
				{recordsToShow > 0
					? `Showing ${indexOfFirstRecord + 1} to ${
							indexOfLastRecord <= recordsToShow
								? indexOfLastRecord
								: recordsToShow
					  } of 
			${recordsToShow} entries`
					: 'Entries not found'}
			</span>
			<Pagination />
		</Wrapper>
	)
}

export default BottomSection
