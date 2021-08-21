import React from 'react'
import { AccountData } from './styled'

type AccountInfoProps = {
	info: {}[]
}
const AccountInfo = ({ info }: AccountInfoProps) => (
	<AccountData>
		{Object.entries(info).map(([key, value]) => (
			<React.Fragment key={key}>
				<h3>{key}</h3>
				<span>{value as string}</span>
			</React.Fragment>
		))}
	</AccountData>
)

export default AccountInfo
