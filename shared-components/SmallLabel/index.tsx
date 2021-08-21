import { ChildrenProp } from 'types/childrenProp'
import { Container, Typography } from './styled'

type SmallLabelProps = {
	isSpan?: boolean
	margin?: string
	isNew?: boolean
}

const SmallLabel = ({
	children,
	isSpan,
	margin,
	isNew,
}: SmallLabelProps & ChildrenProp) => (
	<Container isNew={isNew} isSpan={isSpan} margin={margin}>
		<Typography isNew={isNew} isSpan={isSpan}>
			{children}
		</Typography>
	</Container>
)
SmallLabel.defaultProps = {
	isSpan: false,
	margin: '0 0.125em',
	isNew: false,
}

export type { SmallLabelProps }
export default SmallLabel
