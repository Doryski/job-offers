import styled from 'styled-components'
import Link from 'next/link'
import { TECHNOLOGIES } from '../../helpers/utils'
import stringFormat from '../../helpers/stringFormat'
import { useRouter } from 'next/router'
import CustomButton from '../shared/CustomButton'
import createTechQuery from '../../helpers/createTechQuery'

// type TechListProps = {
// 	close: VoidFunction
// }

const TechList = () =>
	// { close }: TechListProps
	{
		const { query } = useRouter()

		return (
			<>
				{TECHNOLOGIES.map((tech) => {
					return (
						<Link href={createTechQuery(tech, query)} key={tech} shallow>
							<a
							// onClick={close}
							>
								<CustomButton
									active={query.tech === stringFormat(tech)}
									minWidth='60px'
									padding='.7em .75em'
									margin='0 auto'>
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
	margin-top: 8px;
`
export default TechList
