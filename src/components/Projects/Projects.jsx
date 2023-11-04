import { globalContext } from "../../contexts/globalContext"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import { Hr, ProjectContainer, ProjectContainerTitle, ProjectStyleContainer } from "./ProjectsStyle"
import { useContext } from "react"

export const Projects = () => {
    const { projectCard } = useContext(globalContext)

    return (
        <ProjectContainer>
            
            <ProjectContainerTitle>
                <h1>Projetos</h1>
            </ProjectContainerTitle>
            
            
            <ProjectStyleContainer>
                {projectCard.map((project, index) => {
                    return <>   
                    <ProjectCard
                        key={index}
                        proj={project}
                    />
                    <Hr/>
                    </>
                })}
            </ProjectStyleContainer>
            
            
        </ProjectContainer>

    )
}