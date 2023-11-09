import { technologiesUsed } from "../../../constants/skills"
import { ProjectCardContainer, ProjectCardContainerCenter, ProjectCardContainerLeft, ProjectCardContainerLinks, ProjectCardContainerRight, ProjectCardRightTech } from "./ProjectCardStyled"
import { Technologies } from "./Technologies/Technologies"

export const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <ProjectCardContainerLeft>
                <h2>{project.title}</h2>
                <h4>{project.stack}</h4>
                <figure>
                    <img src={project.image} alt={project.title} />
                </figure>
            </ProjectCardContainerLeft>
            <ProjectCardContainerCenter>
                <p>{project.description}</p>
                <ProjectCardContainerLinks>
                    <p>DEPLOY:
                        <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                            {project.deploy}
                        </a>
                    </p>
                    <p>REPOSITÓRIO:
                        <a href={project.repositorie} target="_blank" rel="noopener noreferrer">
                            {project.repositorie}
                        </a>
                    </p>
                </ProjectCardContainerLinks>
            </ProjectCardContainerCenter>
            <ProjectCardContainerRight>
                <h3>Tecnologias Utilizadas</h3>
                <ProjectCardRightTech>
                    {project.technologies.map((tech, index) => {
                        return <Technologies
                            key={index}
                            name={tech}
                            logo={technologiesUsed(tech)}
                        />
                    })}
                </ProjectCardRightTech>
            </ProjectCardContainerRight>
        </ProjectCardContainer>
    )
}