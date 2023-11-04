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
@media screen and (max-width : 1700px) {
    width: 15%;
}
@media screen and (max-width : 1380px) {
    width: 18%;

}
@media screen and (max-width : 1200px) {
    width: auto;

}

`
export const TechnologiesImageContainer = styled.figure`
    width: 40px;
    display: flex;
    align-items: center;
    
    img {
        width: 100%;
        height: 100%;
        
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