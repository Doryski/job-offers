import CloseIcon from '@material-ui/icons/Close'
import { AbsolutePosType } from '@/types'
import { Wrapper } from './styled'

type CloseButtonProps = {
	handleClick: VoidFunction
	absolute?: AbsolutePosType
}

const CloseButton = ({ handleClick, absolute }: CloseButtonProps) => (
	<Wrapper onClick={handleClick} absolute={absolute}>
		<CloseIcon />
	</Wrapper>
)
CloseButton.defaultProps = {
	absolute: {},
}

export default CloseButton
