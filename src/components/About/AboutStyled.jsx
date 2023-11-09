import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media ( max-width: 999px) {
        width: 100%;
    }
`

export const ProfileImage = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
    img{
        width: 250px;
        border-radius: 20%;
        object-fit: cover;
    }
`

export const AboutDescription = styled.section`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin: 5px;
    p {
        font-weight: 600;
    }
`

export const AboutSkills = styled.section`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutSkillsCardTitle = styled.div`
    height:10% ;
    margin-bottom: 30px;
`

export const AboutSkillsCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    padding: 5%;
    column-gap: 20px;
    row-gap: 20px;
`
