import styled from 'styled-components'

const TechName = styled.span<{ all?: boolean }>`
	font-size: 0.875rem;
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }) => (all ? '.1em' : '-5px')};
`
export { TechName }
