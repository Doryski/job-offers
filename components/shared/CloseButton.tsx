import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

export type AbsolutePosType = {
	left?: string
	top?: string
	right?: string
	bottom?: string
}

const CloseButton = ({
	handleClick,
	absolute,
}: {
	handleClick: VoidFunction
	absolute?: AbsolutePosType
}) => (
	<Wrapper onClick={handleClick} absolute={absolute}>
		<CloseIcon />
	</Wrapper>
)

export const Wrapper = styled.div<{ absolute: AbsolutePosType }>`
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

export default CloseButton
