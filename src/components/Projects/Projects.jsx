import { ProjectContainer, ProjectContainerTitle, ProjectExample, ProjectStyleContainer } from "./ProjectsStyle"

export const Projects = () => {
    return (
        <ProjectContainer>
            <ProjectContainerTitle>
                <h1>Projetos</h1>
            </ProjectContainerTitle>
            <ProjectStyleContainer>
                <ProjectExample>Projeto1</ProjectExample>
                <ProjectExample>Projeto2</ProjectExample>
                <ProjectExample>Projeto3</ProjectExample>
                <ProjectExample>Projeto4</ProjectExample>
            </ProjectStyleContainer>
        </ProjectContainer>
        
    )
}