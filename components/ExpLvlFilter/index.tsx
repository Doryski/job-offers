import { useRouter } from 'next/router'
import styled from 'styled-components'
import createQuery from 'utils/createQuery'
import { EXP_LVL_OPTIONS } from '@/utils/vars'
import CustomButton from '@/shared-components/CustomButton'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
`

const ExpLvlFilter = () => {
	const { query, push } = useRouter()
	const isExpLvlInQuery = (expLvl: string) =>
		expLvl.myNormalize() === (query.expLvl as string)

	const createExpQuery = (expLvl: string) =>
		createQuery({ query: 'expLvl', value: expLvl.myNormalize() }, query)

	const handleExpLvlClick = (lvl: string) => {
		const expQuery = createExpQuery(
			query.expLvl && isExpLvlInQuery(lvl) ? '' : lvl
		)
		push(expQuery, undefined, { shallow: true })
	}
	const isLvlActive = (lvl: string) => isExpLvlInQuery(lvl)
	const handleAllClick = () => {
		push(createExpQuery(''), undefined, { shallow: true })
	}
	return (
		<Wrapper>
			<CustomButton
				handleClick={handleAllClick}
				active={!query.expLvl}
				padding='0.375em 2.5em'
				margin='0.375em 0.375em 0.375em 0'
				fWeight={!query.expLvl ? 600 : 400}>
				All
			</CustomButton>
			{EXP_LVL_OPTIONS.map(lvl => (
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

export default ExpLvlFilter
