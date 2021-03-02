import styled from 'styled-components'

const Center = styled.div<{
	width?: string
	height?: string
	direction?: string
}>`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: center;
	align-items: center;
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	position: relative;
`
export default Center
