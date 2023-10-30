import { ProjectCardContainer, ProjectDescriptionContainer, ProjectImages, ProjectTitleImageContainer, ProjectUtilsContainer, ProjectUtilsLinks } from "./ProjectCardStyle"
import { technologiesUsed } from "../../Utils/technologies"

export const ProjectCard = ({ proj }) => { 
    
    return (
        <ProjectCardContainer>
            <ProjectTitleImageContainer>
                <h1>{proj.title}</h1>
                <h4>{proj.stack}</h4>
                <figure>
                    <img src={proj.image} alt={proj.title} />
                </figure>
            </ProjectTitleImageContainer>
            <ProjectDescriptionContainer>
                <p>{proj.description}</p>
                <ProjectUtilsLinks>
                    <div>
                        <p>Link Deploy:</p>
                    <a href={proj.deploy} target="_blank">
                        {proj.deploy}
                    </a>
                    </div>
                    <div>
                        <p>Link Repositório:</p>
                    <a href={proj.repositorie} target="_blank">
                        {proj.repositorie}
                    </a>
                    </div>
                </ProjectUtilsLinks>
            </ProjectDescriptionContainer>
            <ProjectUtilsContainer>
                <ProjectImages>
                    <h5>Tecnologias Utilizadas:</h5>
                    {proj.technologies.map((tech)=>{
                        return <img src={technologiesUsed(tech)}/>
                    })}
                </ProjectImages>
            </ProjectUtilsContainer>
        </ProjectCardContainer>
    )
}