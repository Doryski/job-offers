import React from 'react'
import { AppProps } from 'next/app'
import ThemeStyleProvider from '../theme/ThemeStyleProvider'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<React.StrictMode>
		<ThemeStyleProvider>
			<Component {...pageProps} />
		</ThemeStyleProvider>
	</React.StrictMode>
)

export default MyApp
