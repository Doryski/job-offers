import React from 'react'
import { AppProps } from 'next/app'
import ThemeStyleProvider from '@/theme/ThemeStyleProvider'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import 'utils/string'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<React.StrictMode>
		<NextSeo
			title='Job offers | IT sector'
			description='A platform with job offers for IT sector.'
		/>
		<NextAuthProvider session={pageProps.session}>
			<ThemeStyleProvider>
				<Component {...pageProps} />
			</ThemeStyleProvider>
		</NextAuthProvider>
	</React.StrictMode>
)

export default MyApp
