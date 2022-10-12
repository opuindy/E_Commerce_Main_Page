import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const Orange = 'hsl(26, 100%, 55%)';
const Pale_orange = 'hsl(25, 100%, 94%)';

const Very_dark_blue = 'hsl(220, 13%, 13%)';
const Dark_grayish_blue = 'hsl(219, 9%, 45%)';
const Grayish_blue = 'hsl(220, 14%, 75%)';
const Light_grayish_blue = 'hsl(223, 64%, 98%)';
const White = 'hsl(0, 0%, 100%)';
const Black_lightbox = 'hsl(0, 0%, 75%)';

const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;
const borderRadius = `0.625rem`;

/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 background: ${White};
 font-size: 1rem;
 font-family: 'Kumbh Sans', sans-serif;
 height: max-content;
  overflow-x :hidden ;
}

img{
 display: block;
}

li {
 list-style-type: none;
 padding-left: 0;
}

a {
 text-decoration: none;
}

`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 400px) {
    margin-bottom: 13em;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 85vh;
    margin-bottom: 0;
  }
`;
