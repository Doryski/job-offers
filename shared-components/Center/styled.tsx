import { CSSProperties } from 'react'
import styled from 'styled-components'

const Center = styled.div<{
	width?: CSSProperties['width']
	height?: CSSProperties['height']
	direction?: CSSProperties['flexDirection']
}>`
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	position: relative;
`
export default Center
