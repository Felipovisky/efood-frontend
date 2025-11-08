import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #fff;
  }
`;

export const PageContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GlobalStyles;
