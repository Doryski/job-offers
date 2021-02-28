import React from 'react'
import { AppProps } from 'next/app'
import ThemeStyleProvider from '../theme/ThemeStyleProvider'
import { Provider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<React.StrictMode>
		<Provider session={pageProps.session}>
			<ThemeStyleProvider>
				<Component {...pageProps} />
			</ThemeStyleProvider>
		</Provider>
	</React.StrictMode>
)

export default MyApp
