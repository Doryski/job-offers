import { useRouter } from 'next/router'
import styled from 'styled-components'
import createQuery from '../../helpers/createQuery'
import stringFormat from '../../helpers/stringFormat'
import { EXP_LVL_OPTIONS } from '../../helpers/utils'
import CustomButton from '../shared/CustomButton'

const ExpLvlFilter = () => {
	const { query, push } = useRouter()
	const isExpLvlInQuery = (expLvl: string) =>
		stringFormat(expLvl) === (query.expLvl as string)

	const createExpQuery = (expLvl: string) =>
		createQuery({ query: 'expLvl', value: stringFormat(expLvl) }, query)

	const handleExpLvlClick = (lvl: string) => {
		const expQuery = createExpQuery(
			query.expLvl && isExpLvlInQuery(lvl) ? '' : lvl
		)
		push(expQuery, undefined, { shallow: true })
	}
	const isLvlActive = (lvl: string) => isExpLvlInQuery(lvl)
	return (
		<Wrapper>
			<CustomButton
				handleClick={() => {
					push(createExpQuery(''), undefined, { shallow: true })
				}}
				active={!query.expLvl}
				padding='0.375em 2.5em'
				margin='0.375em 0.375em 0.375em 0'
				fWeight={!query.expLvl ? 600 : 400}>
				All
			</CustomButton>
			{EXP_LVL_OPTIONS.map((lvl) => (
				<CustomButton
					handleClick={() => handleExpLvlClick(lvl)}
					active={isLvlActive(lvl)}
					padding='0.375em 2.5em'
					margin='0.375em'
					key={lvl}
					fWeight={isLvlActive(lvl) ? 600 : 400}>
					{lvl}
				</CustomButton>
			))}
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.625em;
	}
`
export default ExpLvlFilter
