import { AbsolutePosType } from '@/types'
import styled from 'styled-components'

type WrapperProps = { absolute?: AbsolutePosType }

const Wrapper = styled.div<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.span};
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s;
	color: ${({ theme }) => theme.colors.span};
	position: ${({ absolute }) => (absolute ? 'absolute' : 'unset')};
	top: ${({ absolute }) => (absolute ? absolute.top : 'unset')};
	left: ${({ absolute }) => (absolute ? absolute.left : 'unset')};
	bottom: ${({ absolute }) => (absolute ? absolute.bottom : 'unset')};
	right: ${({ absolute }) => (absolute ? absolute.right : 'unset')};

	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
export { Wrapper }
