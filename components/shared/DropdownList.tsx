import styled from 'styled-components'

export const DropdownList = styled.div<{
	isOpen: boolean
	width?: string
	position?: {
		top?: string
		right?: string
		bottom?: string
		left?: string
	}
}>`
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	position: absolute;
	top: ${({ position }) => position?.top ?? '30px'};
	right: ${({ position }) => position?.right ?? 'unset'};
	bottom: ${({ position }) => position?.bottom ?? 'unset'};
	left: ${({ position }) => position?.left ?? 'unset'};
	cursor: pointer;
	list-style-type: none;
	background: ${({ theme }) => theme.colors.buttonBackground};
	z-index: 20;
	width: ${({ width }) => width || '150px'};
	padding: 0.5em 0;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
		rgba(0, 0, 0, 0.12) 0px 2px 1px -1px, rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
`
export const DropdownListItem = styled.div`
	display: flex;
	justify-content: flex-start;
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
