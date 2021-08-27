import styled from 'styled-components'

const Container = styled.div`
	margin: 0 0.5em 0.75em 0.75em;
	border-radius: 5px;
	box-shadow: ${({ theme }) => theme.shadows.card};
	background: ${({ theme }) => theme.colors.white};
	display: flex;
	overflow: hidden;
	transition: box-shadow 0.13s;
	cursor: pointer;
	min-height: 77px;
	height: 77px;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.cardHover};
	}
`
const TechColor = styled.div<{ index: number }>`
	background-color: ${({ index }) => (index % 2 ? 'blue' : 'orange')};
	width: 5px;
`
const InfoContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
	padding: 0.5em 1em;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

const SalaryWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.625em 0 0;
	@media only screen and (max-width: 600px) {
		padding: 0;
	}
`

const InfoWrapper = styled.section`
	display: flex;
	@media only screen and (max-width: 600px) {
		align-items: flex-end;
		justify-content: flex-end;
	}
`

const RequirementsWrapper = styled.section`
	display: flex;

	@media only screen and (max-width: 600px) {
		display: none;
	}
`
const MobileWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`

export {
	MobileWrapper,
	RequirementsWrapper,
	Container,
	InfoContainer,
	InfoWrapper,
	Wrapper,
	SalaryWrapper,
	TechColor,
}
