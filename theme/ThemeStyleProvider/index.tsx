import { ThemeProvider } from 'styled-components'
import { lightMode } from '@/theme/index'
import GlobalStyle from '@/theme/GlobalStyle'
import { ChildrenProp } from 'types/childrenProp'

const ThemeStyleProvider = ({ children }: ChildrenProp) => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={lightMode}>{children}</ThemeProvider>
	</>
)

export default ThemeStyleProvider
