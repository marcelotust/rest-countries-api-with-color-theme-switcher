import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: 'Nunito Sans', sans-serif;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear; 
  }
  
  input, button {
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.color};
}
`;
