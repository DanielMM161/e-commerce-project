import { createGlobalStyle } from "styled-components";

//font - family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        outline: none;
        /* -webkit-appearance: none; */
        -webkit-tap-highlight-color: transparent;

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input[type=submit] {
        cursor: pointer;
        border: none;
    }

    input, 
    textarea {
        outline: 0;
    }

    html, 
    body, 
    #root {
        height: 100%;
        min-height: 100vh;
        width: 100%;

        background-color: #EDEDED;

        transition: .25s;
    }
`;

export default GlobalStyle;