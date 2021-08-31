import { ArrowButtonIcon, ArrowButtonWrapper } from './styled'

type ArrowDirectionType = 'right' | 'left'

type ArrowButtonProps = {
	direction: ArrowDirectionType
	handleClick?: VoidFunction
}

const ArrowButton = ({ direction, handleClick }: ArrowButtonProps) => (
	<ArrowButtonWrapper onClick={handleClick} direction={direction}>
		{direction === 'right' && <ArrowButtonIcon direction='right' />}
		{direction === 'left' && <ArrowButtonIcon direction='left' />}
	</ArrowButtonWrapper>
)

ArrowButton.defaultProps = {
	handleClick: undefined,
}

export type { ArrowDirectionType }
export default ArrowButton
