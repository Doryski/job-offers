import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;

	@media only screen and (max-width: 690px) {
		flex-direction: column;
		text-align: center;
	}
`

export { Wrapper }
