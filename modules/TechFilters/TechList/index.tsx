import Link from 'next/link'
import { TECHNOLOGIES } from '@/utils/vars'
import { useRouter } from 'next/router'
import CustomButton from '@/shared-components/CustomButton'
import createTechQuery from 'utils/createTechQuery'
import { TechName } from './styled'

const TechList = () => {
	const { query } = useRouter()

	return (
		<>
			{TECHNOLOGIES.map(tech => (
				<Link href={createTechQuery(tech, query)} key={tech} shallow>
					<a>
						<CustomButton
							active={query.tech === tech.myNormalize()}
							minWidth='60px'
							padding='.7em 3.15em'
							margin='.25em .5em .25em 0'
							fWeight={query.tech === tech.myNormalize() ? 600 : 400}>
							<TechName>{tech}</TechName>
						</CustomButton>
					</a>
				</Link>
			))}
		</>
	)
}

export default TechList
