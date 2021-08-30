import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;

	@media only screen and (max-width: 760px) {
		padding-bottom: 1em;
	}
`

export { Wrapper }
