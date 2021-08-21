import { InputAdornment } from '@material-ui/core'
import styled from 'styled-components'

const StyledInputAdornment = styled(InputAdornment)`
	color: ${({ theme }) => theme.colors.span};
`
export { StyledInputAdornment }
