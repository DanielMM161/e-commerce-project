import { createGlobalStyle } from "styled-components";

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

    .overlay {
        position: fixed;
        top: 0;            
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.37);
        z-index: 1;
    }

    .overlay.overlay-left {  
        left: 100%;
    }
    
    .overlay.overlay-right {  
        right: 100%;
    }

    button[disabled=disabled], button:disabled {
        cursor: not-allowed;
        background-color: rgb(229, 229, 229) !important;
    }

    .main-button {
        background-color: rgb(97 17 34 / 1);
        padding: 1rem;
        width: 50%;
        color: white;
        text-transform: uppercase;
        font-weight: 700;
    }
`;

export default GlobalStyle;