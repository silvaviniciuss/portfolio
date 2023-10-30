import styled from "styled-components"

export const ProjectCardContainer = styled.main`
    height: 300px;
    margin: 10px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
`
export const ProjectTitleImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3px;
    width: 30%;
    h1 {
        font-size: 30px;
    }
    figure img {
        border-radius: 10px;
    }
`

export const ProjectDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 15px;
    width: 50%;
    padding: 5px;
    margin-top: 10px;
    text-align: justify;
    font-size: 15px;
    font-weight: 500;
`

export const ProjectUtilsContainer = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
`

export const ProjectUtilsLinks = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    a {
        text-decoration: none;
        cursor: pointer;
    }
`

export const ProjectImages = styled.figure`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;

    img {
        height: 30px;
        width: 100px;
    }
`
