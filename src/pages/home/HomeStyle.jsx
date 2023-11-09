import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: row;
    height: 92vh;
    background: --main-color;

    @media (max-width: 999px){
        flex-direction: column;
    }
`