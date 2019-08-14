import { createGlobalStyle } from 'styled-components';
import { THEME } from './theme/site.scss';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ${THEME}


    body {
      overflow-x : hidden
    }
`;

export default GlobalStyle;
