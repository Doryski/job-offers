import { TextField } from '@material-ui/core'
import { CSSProperties } from 'react'
import styled from 'styled-components'

const ApplyContainer = styled.section`
	margin: 1.875em 0;
	padding: 0.3125em 0;
	box-shadow: ${({ theme }) => theme.colors.shadow};
	background: ${({ theme }) => theme.colors.white};
	border-radius: 5px;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin: 0.9375em 0;
	}
`
const Form = styled.form`
	width: 100%;
`

const FormGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	> div:nth-of-type(odd) {
		margin-right: 0.875em;
	}
	> div:nth-of-type(3),
	div:nth-of-type(4) {
		margin-top: 1em;
	}
	> div:nth-of-type(3) > div {
		min-height: 100px;
	}
`
const ErrorMessage = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
`
const UploadWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	height: calc(((100% - 12px) - 6px) - 8px);
	position: relative;
	width: 100%;
	padding: 20px;
	border: 1px solid;
	border-color: hsl(0, 0%, 88%);
	border-radius: 5px;
	transition: border-color 300ms ease 0s;
	cursor: pointer;
	min-height: 100px;
	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
	}
`
const UploadIconWrapper = styled.div`
	> svg {
		width: 50px;
		height: 50px;
	}
`
const CheckboxWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.5em;
	margin-left: -0.75em;
`
const ApplyButtonWrapper = styled.div<{
	justify?: CSSProperties['justifyContent']
}>`
	display: flex;
	justify-content: ${({ justify }) => justify || 'flex-end'};
`
const DeleteFileBtn = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	border-radius: 5px;
	right: 0;
	bottom: 0;
	padding: 6px 8px;
	color: ${({ theme }) => theme.colors.span};
	&:hover {
		background: ${({ theme }) => theme.colors.buttonBackgroundHover};
	}
`
const MyTextField = styled(TextField)`
	font-family: inherit;
	div > fieldset {
		border-color: hsl(0, 0%, 88%);
		transition: border-color 300ms ease 0s;
	}
	div:hover > fieldset {
		border-color: ${({ theme }) => theme.colors.primary} !important;
	}
`
const FileName = styled.div`
	max-width: 210px;
`
const UploadLabel = styled.label`
	cursor: pointer;
`
const UploadInput = styled.input`
	display: none;
`

export {
	ErrorMessage,
	UploadWrapper,
	UploadIconWrapper,
	MyTextField,
	Form,
	FormGrid,
	DeleteFileBtn,
	ApplyContainer,
	CheckboxWrapper,
	ApplyButtonWrapper,
	FileName,
	UploadLabel,
	UploadInput,
}
