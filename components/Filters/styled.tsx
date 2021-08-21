import styled from 'styled-components'

const FilterContainer = styled.section`
	margin-bottom: 1em;
	width: 100%;
`
const Container = styled.div`
	min-height: 92vh;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border-left: 1px solid ${({ theme }) => theme.colors.divider};
`
const SubContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 0.5em 1.25em;
`

const FiltersHeader = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export { Container, FiltersHeader, SubContainer, FilterContainer }
