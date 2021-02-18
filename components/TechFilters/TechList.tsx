import styled from 'styled-components'
import Link from 'next/link'
import { TECHNOLOGIES } from '../../helpers/utils'
import stringFormat from '../../helpers/stringFormat'
import TechIcon from '../shared/TechIcon'
import createQuery from '../../helpers/createQuery'
import { useRouter } from 'next/router'
import Query from '../../types/Query'
import CustomButton from '../shared/CustomButton';

type TechListProps = {
	cutTechArray?: number
	close: VoidFunction
}

const TechList = ({ cutTechArray, close }: TechListProps) => {
	const { query } = useRouter()
	return (
		<>
			{TECHNOLOGIES.slice(0, cutTechArray).map((tech) => {
				let techQuery: string
				if (query.tech === stringFormat(tech)) {
					techQuery = createQuery({ query: 'tech', value: '' }, query)
				} else {
					techQuery = createQuery(
						{ query: 'tech', value: stringFormat(tech) },
						query
					)
				}

				return (
					<Link href={techQuery} key={tech} shallow>
						<a onClick={close}>
							<CustomButton>

								<TechName>{tech}</TechName>
							</CustomButton>
						</a>
					</Link>
				)
			})}
		</>
	)
}
export const TechName = styled.span<{ all?: boolean }>`
	font-size: 0.6875rem;
	color: ${({ theme }) => theme.colors.text};
	line-height: 15px;
	text-align: center;
	margin-top: ${({ all }) => (all ? '.1em' : '-5px')};
`

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`
export default TechList
