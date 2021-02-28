import { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from '.'
import { CheveronRight, CheveronLeft } from '@styled-icons/zondicons'

const Pagination = () => {
	const {
		recordsPerPage,
		recordsToShow,
		setCurrentPage,
		currentPage,
	} = useContext(TableContext)

	// create array of page numbers, so it's possible to map through pages
	const pageNums = []
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
				? pageNums.slice(currentPage - 1, currentPage + 2).map((number) => (
						<li key={number}>
							<Link
								active={currentPage === number}
								onClick={() => setCurrentPage(number)}>
								{number}
							</Link>
						</li>
				  ))
				: pageNums.slice(currentPage - 2, currentPage + 1).map((number) => (
						<li key={number}>
							<Link
								active={currentPage === number}
								onClick={() => setCurrentPage(number)}>
								{number}
							</Link>
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
const List = styled.ul`
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 690px) {
		margin-top: 0.45em;
	}
`
const Link = styled.a<{ disabled?: boolean; active?: boolean }>`
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
const CheveronLink = styled(Link)`
	display: flex;
	padding: 0.45em 0.45em;
`

// special style for Links with double cheveron
const EdgeLink = styled(Link)`
	display: flex;
	padding: 0.45em 0.75em;
	& svg {
		margin: 0 -0.4em;
	}
`
export default Pagination
