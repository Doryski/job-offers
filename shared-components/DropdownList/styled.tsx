import { AbsolutePosType } from '@/types'
import { CSSProperties } from 'react'
import styled from 'styled-components'

const DropdownList = styled.div<{
	isOpen: boolean
	width?: CSSProperties['width']
	position?: AbsolutePosType
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
	box-shadow: hsla(0, 0%, 0%, 0.137) 0px 1px 1px 0px,
		hsla(0, 0%, 0%, 0.12) 0px 2px 1px -1px, hsla(0, 0%, 0%, 0.2) 0px 1px 3px 0px;
`
const DropdownListItem = styled.div`
	display: flex;
	justify-content: flex-start;
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
export { DropdownList, DropdownListItem }
