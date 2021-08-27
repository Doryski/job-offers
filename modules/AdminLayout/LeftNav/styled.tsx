import styled from 'styled-components'

const Wrapper = styled.aside`
	background-color: lightgray;
`

const TableList = styled.ul`
	display: flex;
	flex-direction: column;
`
const ListItem = styled.li`
	text-align: center;
	padding: 0.5em;
	background-color: transparent;
	transition: background-color 0.3s;
	&:hover {
		background-color: gray;
	}
`

export { ListItem, Wrapper, TableList }
