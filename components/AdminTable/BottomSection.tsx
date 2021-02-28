import { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '.'
import Pagination from './Pagination'

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
const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;

	@media only screen and (max-width: 690px) {
		flex-direction: column;
		text-align: center;
	}
`

export default BottomSection
