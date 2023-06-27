import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
body {
    height: 100vh;
    width: 100vw;
    font-family: 'Manrope', sans-serif;
}
`;

export {GlobalStyles};