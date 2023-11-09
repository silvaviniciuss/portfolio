import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: #fefefe;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body{
        background: #edeff2;
        color: rgb(0 0 0 / 74%);
        @media (max-width: 999px){
            overflow-x: hidden;
        }
    }
`