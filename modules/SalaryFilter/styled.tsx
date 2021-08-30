import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`

const SalaryWrapper = styled.section`
	width: 100%;
`

const AmountContainer = styled.div`
	margin-top: 0.25em;
	width: 100%;
	display: flex;
	align-items: center;
`
const AmountWrapper = styled.section`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.colors.white};
	padding: 0.375em 1em;
	border-radius: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.buttonBorder};
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 25%;
		padding: 0.3125em 0.625em;
	}
`

const SliderWrapper = styled.section`
	width: 50%;
	margin: 0 auto;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 40%;
	}
`

export { SliderWrapper, AmountContainer, AmountWrapper, Wrapper, SalaryWrapper }
