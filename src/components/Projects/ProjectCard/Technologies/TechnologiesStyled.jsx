import styled from "styled-components";

export const TechnologiesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: black;
    padding: 3px;
    border-radius: 7px;
    color: white;
`
export const TechnologiesImageContainer = styled.figure`
    display: flex;
    align-items: center;
    img {
        width: 50px;
        height: 50px;
    }
`


export const TechnologiesContainerTitle = styled.div`
    width: 100%;
    text-align: center;
    p {
        font-weight: 900;
        text-transform: uppercase;
        color: white;
        
    }
`