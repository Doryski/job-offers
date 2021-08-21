import { CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

const Label = styled.label`
	color: ${({ theme }) => theme.colors.text};
`
const InputsContainer = styled.section`
	padding: 1.25em;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.3125em;
	}
`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const InputWrapper = styled.div`
	margin: 0 0.1875em 0.625em 0.1875em;
`

const Container = styled.div`
	height: 100%;
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	padding-bottom: 0.625em;
`
const StyledCircularProgress = styled(CircularProgress)`
	margin: 0 1.5625em;
`
export {
	Label,
	Wrapper,
	InputsContainer,
	InputWrapper,
	Container,
	StyledCircularProgress,
}
