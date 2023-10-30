import { AboutContainer, AboutDecription, AboutImage, AboutStyle, AboutTechnologies, AboutTechnologiesSkills, AboutTechnologiesTitle } from "./AboutStyle"
import profileImage from "../../assets/profile-image.jpg"
import { CardSkills } from "../CardSkills/CardSkills"
import {skills} from "../../constants/skills"

export const About = () => {
    return (
        <AboutContainer>
            <AboutStyle>
                <AboutImage>
                    <img src={profileImage} alt="" />
                </AboutImage>
                <AboutDecription>
                    <p>Sou graduado em Gestão da tecnologia da informação e formado em
                    Desenvolvimento Web Fullstack pelo bootcamop da Labenu , onde através de
                    projetos adquiri experiência em desenvolvimento utilizando tecnologias
                    como JavaScript, React, typescript entre outras. Formado no Bootcamp Santander
                    Java+Angular FullStack. Minha experiência mais recente foi como
                    pessoa instrutora de trânsito, durante 4 anos.
                    </p>
                    <p>Com o atual crescimento da tecnologia e
                    a possibilidade de trabalhos remotos, vi
                    como uma oportunidade de trabalhar em
                    uma área que me identifiquei bastante</p>
                </AboutDecription>
                <AboutTechnologies>
                    <AboutTechnologiesTitle>
                        <h1>Habilidades</h1>
                    </AboutTechnologiesTitle>
                    <AboutTechnologiesSkills>
                        {skills.map((skill) => {
                            return <CardSkills
                                name = {skill.name}
                                logo = {skill.logo}
                            />
                        })}
                    </AboutTechnologiesSkills>
                </AboutTechnologies>
            </AboutStyle>
        </AboutContainer>

    )
}