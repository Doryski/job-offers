import { ThemeProvider } from 'styled-components'
import { lightMode } from '@/theme/index'
import GlobalStyle from '@/theme/GlobalStyle'

const ThemeStyleProvider = ({ children }: { children: React.ReactNode }) => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={lightMode}>{children}</ThemeProvider>
	</>
)

export default ThemeStyleProvider
