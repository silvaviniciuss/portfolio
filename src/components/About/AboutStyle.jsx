import styled from "styled-components"

export const AboutContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
`

export const AboutStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const AboutImage = styled.figure`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 55%;
        height: 90%;
        border-radius: 20%;
    }
@media screen and (max-width : 1200px) {
    img {
        width: 20%;
        height: 100%;
    }
}
`

export const AboutDecription = styled.article`
    width: 100%;
    height: 30%;
    p {
        text-align: justify;
        margin: 10px;
        font-weight: 620;
    }

    
@media screen and (max-width : 1800px) {
    height: 60%;
}

@media screen and (max-width : 1500px) {
    height: 50%;
}
@media screen and (max-width : 1500px) {
    text-align: center;
}
`

export const AboutTechnologies = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 30px;
    align-items: center;

`

export const AboutTechnologiesTitle = styled.div`
    height: 10%;
    h1 {
        font-size: 25px;
    }
`

export const AboutTechnologiesSkills = styled.div`
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
`

