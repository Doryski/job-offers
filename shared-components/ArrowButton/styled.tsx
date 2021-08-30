import { ChevronLeft } from '@material-ui/icons'
import styled, { css } from 'styled-components'
import { ArrowDirectionType } from '.'

type ArrowButtonIconProps = {
	direction: ArrowDirectionType
}

const HEIGHT_PX = 60

const ArrowButtonWrapper = styled.button<{
	direction: ArrowDirectionType
}>`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	background-color: hsla(231, 48%, 48%, 0.3);
	transition: background-color 0.3s;
	z-index: 100;
	height: ${HEIGHT_PX}px;
	width: ${HEIGHT_PX / 2}px;
	${({ direction }) =>
		direction === 'left'
			? css`
					left: 0;
					border-top-right-radius: ${HEIGHT_PX / 2}px;
					border-bottom-right-radius: ${HEIGHT_PX / 2}px;
					padding-right: ${HEIGHT_PX / 10}px;
			  `
			: css`
					right: 0;
					border-top-left-radius: ${HEIGHT_PX / 2}px;
					border-bottom-left-radius: ${HEIGHT_PX / 2}px;
					padding-left: ${HEIGHT_PX / 10}px;
			  `}
`

const ArrowButtonIcon = styled(
	({ direction, ...props }: ArrowButtonIconProps) => <ChevronLeft {...props} />
)`
	transform: ${({ direction }) =>
		direction === 'right' ? 'rotate(180deg)' : 'unset'};
	color: ${({ theme }) => theme.colors.primary};
`

export { ArrowButtonWrapper, ArrowButtonIcon }
