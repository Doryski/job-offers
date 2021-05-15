import { useContext } from 'react'
import { CheveronRight, CheveronLeft } from '@styled-icons/zondicons'
import styled from 'styled-components'
import { TableContext } from '.'

const List = styled.ul`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 690px) {
		margin-top: 0.45em;
	}
`
const SwapPageBtn = styled.button<{ disabled?: boolean; active?: boolean }>`
	display: block;
	padding: 0.45em 0.75em;
	border: 1px solid #dcdcdc;
	background: ${({ active }) => (active ? '#daefff' : '#fff')};
	font-weight: bold;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
		background: ${({ disabled }) => (disabled ? '#fff' : '#d8d4d4')};
	}
	& svg {
		fill: ${({ disabled }) => (disabled ? '#dcdcdc' : '#1f1f1f')};
	}
`
const CheveronLink = styled(SwapPageBtn)`
	display: flex;
	padding: 0.45em 0.45em;
`

const EdgeLink = styled(SwapPageBtn)`
	display: flex;
	padding: 0.45em 0.75em;
	& svg {
		margin: 0 -0.4em;
	}
`

const Pagination = () => {
	const {
		recordsPerPage,
		recordsToShow,
		setCurrentPage,
		currentPage,
	} = useContext(TableContext)

	const pageNums: number[] = []
	const getPageNumbers = () => {
		for (let i = 1; i <= Math.ceil(recordsToShow / recordsPerPage); i++) {
			pageNums.push(i)
		}
	}
	getPageNumbers()
	const lastPage = pageNums.length
	const cheveronSize = 22

	return (
		<List>
			{/* link to first page */}
			<li>
				<EdgeLink
					disabled={currentPage === 1}
					onClick={() => setCurrentPage(1)}>
					<CheveronLeft size={cheveronSize} />
					<CheveronLeft size={cheveronSize} />
				</EdgeLink>
			</li>
			{/* link to previous page */}
			<li>
				<CheveronLink
					disabled={currentPage === 1}
					onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}>
					<CheveronLeft size={cheveronSize} />
				</CheveronLink>
			</li>
			{/* links to pages based on number */}
			{currentPage === 1
				? pageNums.slice(currentPage - 1, currentPage + 2).map(number => (
						<li key={number}>
							<SwapPageBtn
								active={currentPage === number}
								onClick={() => setCurrentPage(number)}>
								{number}
							</SwapPageBtn>
						</li>
				  ))
				: pageNums.slice(currentPage - 2, currentPage + 1).map(number => (
						<li key={number}>
							<SwapPageBtn
								active={currentPage === number}
								onClick={() => setCurrentPage(number)}>
								{number}
							</SwapPageBtn>
						</li>
				  ))}
			{/* link to next page */}
			<li>
				<CheveronLink
					disabled={currentPage === lastPage || recordsToShow === 0}
					onClick={() =>
						currentPage !== pageNums.length && setCurrentPage(currentPage + 1)
					}>
					<CheveronRight size={cheveronSize} />
				</CheveronLink>
			</li>
			{/* link to last page */}
			<li>
				<EdgeLink
					disabled={currentPage === lastPage || recordsToShow === 0}
					onClick={() => setCurrentPage(lastPage)}>
					<CheveronRight size={cheveronSize} />
					<CheveronRight size={cheveronSize} />
				</EdgeLink>
			</li>
		</List>
	)
}

export default Pagination
