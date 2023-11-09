import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 60%;
    @media (max-width: 999px) {
        width: 100%;
    }
`

export const ProjectsTitle = styled.div`
    height: 10%;
    padding: 10px;
    h1 {
        letter-spacing: 5px;
    }
`

export const ProjectsCardContaier = styled.div`
    display: flex;
    flex-direction: row;
`


