import { createGlobalStyle } from "styled-components";
import {fontText} from './variables';
import {colorBgHeaderButton} from './variables';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 93.75%;
    font-family: ${fontText};    
}
`;
