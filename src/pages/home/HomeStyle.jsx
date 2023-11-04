import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90vh;
@media screen and (max-width : 1200px) {
    flex-direction: column;
}
`

export const AboutSection = styled.section`
    width: 30vw;
    height: 90vh;
@media screen and (max-width : 1200px) {
    width: 100%;
    height: 50vh;
}
`
export const ProjectsSection = styled.section`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
   
`
