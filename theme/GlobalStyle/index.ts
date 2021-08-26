import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Open Sans';
        font-display: swap;
        src: url('/fonts/Open_Sans/OpenSans-Regular.ttf');
    }

  *,
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
 
  html {
    height: 100%;
    max-height: 100%;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    max-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme?.colors.title}
  }

  ::-webkit-scrollbar {
      width: 10px;
      margin: 0.625em 0;
      &-track {
            border-radius: 10px;
        }
      &-thumb {
        background: hsla(0, 0%, 0%, 0.1);
        border-radius: 10px;
        &:hover {
              background: hsla(0, 0%, 0%, 0.1);
          }
        }
    }
 
`
export default GlobalStyle
