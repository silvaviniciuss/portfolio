import styled from "styled-components"

export const ProjectContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

  
`
export const ProjectContainerTitle = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
    }
`

export const ProjectStyleContainer = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

`
export const ProjectExample = styled.div`
    border: 1px solid #0a4aea;
    height: 300px;
    margin: 10px 10px 10px 10px;

`

export const Hr = styled.hr`
   width: 95%;
   margin-left: 2%;
   border: 1px solid black;
`
