import styled from 'styled-components'

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(7, auto);
	width: 100%;

	@media (max-width: 1025px) {
		padding: 1.875em;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}
`

const LinkBtn = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
`

export { LinkBtn, Container }
