import React from 'react'
import { AccountData } from './styled'

type AccountInfoProps = {
	info: { [key: string]: string | number }[]
}
const AccountInfo = ({ info }: AccountInfoProps) => (
	<AccountData>
		{Object.entries(info).map(([key, value]) => (
			<React.Fragment key={key}>
				<h3>{key}</h3>
				<span>{value}</span>
			</React.Fragment>
		))}
	</AccountData>
)

export default AccountInfo
