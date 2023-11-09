import styled from "styled-components";

export const ProjectCardContainer = styled.main`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    height: 70vh;
    margin: 25px;
    font-weight: 600;
    letter-spacing: 1px;
`

export const ProjectCardContainerLeft = styled.div`
    height: 45%;
    display: flex;
    flex-direction: column;
  
    figure img {
       border-radius: 10px;
    }
`

export const ProjectCardContainerCenter = styled.div`
    height:35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid red;
    text-align: justify;
`

export const ProjectCardContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
    }

    a:hover {
        font-weight: 700;
    }
`

export const ProjectCardContainerRight = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const ProjectCardRightTech = styled.div`
    display: flex;
    column-gap: 10px;
    padding: 10px;
`
