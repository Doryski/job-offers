import styled, { css } from 'styled-components'
import TechSvg from './TechSvg'
import theme from '../../theme'
import { useRouter } from 'next/router'

type TechIconProps = {
	tech: string
	handleClick?: VoidFunction
}

const TechIcon = ({ tech, handleClick }: TechIconProps) => {
	const { query } = useRouter()

	return (
		<Container
			// @ts-ignore
			tech={tech}
			focus={query.tech === tech || !query.tech}
			onClick={handleClick}>
			<TechSvg tech={tech} />
		</Container>
	)
}

export const Container = styled.div<{
	tech: keyof typeof theme.techColors
	focus: boolean
}>`
	position: relative;
	margin: 0 0.1875em;
	border-radius: 5px;
	${({ theme, tech, focus }) => css`
		svg circle {
			fill: ${focus ? theme.techColors[tech] : theme.techColors.disabled};
		}
	`}
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: -45px;
		width: 45px;
		height: 45px;
		background: rgb(255, 255, 255, 0.2);
		transition: all 0.4s;
	}
	&:hover {
		&:before {
			transform: translateX(100%);
		}
	}
`

export default TechIcon
