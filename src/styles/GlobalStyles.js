import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --orange: #E8833A;
  --yellow:  #FBE192;
  --gray: #C3CFD9;
  --white: #FFFFFF;
  --background:  #DFE6ED;
  --text: #293845;
  --green: #0E7D71;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
     font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;
  max-width: 375px;
  width: 375px;
}

body, input, textarea, button {
 font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 400;
 font-family: 'Roboto', sans-serif;
 color: var(--text);
}

p {
  color: var(--text);
}

button{
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto', sans-serif;
}

a{
  text-decoration: none;
  text-align: center;
}

`