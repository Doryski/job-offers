import React from 'react'
import { AppProps } from 'next/app'
import ThemeStyleProvider from '@/theme/ThemeStyleProvider'
import { Provider } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import '@/helpers/string'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<React.StrictMode>
		<NextSeo
			title='Job offers | IT sector'
			description='A platform with job offers for IT sector.'
		/>
		{/* next-auth provider */}
		<Provider session={pageProps.session}>
			<ThemeStyleProvider>
				<Component {...pageProps} />
			</ThemeStyleProvider>
		</Provider>
	</React.StrictMode>
)

export default MyApp
