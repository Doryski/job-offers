import { ChildrenProp } from 'types/childrenProp'
import { Typography } from '../Typography'
import CloseButton from '../CloseButton'
import { HeaderWrapper } from './styled'

type DialogHeaderProps = {
	close?: VoidFunction
}

const DialogHeader = ({
	children,
	close,
}: DialogHeaderProps & ChildrenProp) => (
	<HeaderWrapper>
		<Typography color='text' fWeight={400} fontSize='xl'>
			{children}
		</Typography>
		{close && <CloseButton handleClick={close} absolute={{ right: '10px' }} />}
	</HeaderWrapper>
)
DialogHeader.defaultProps = {
	close: false,
}
export default DialogHeader
