import { CardSkillsContainer } from "./CardSkillsStyle"

export const CardSkills = ({name, logo}) => {
    return (
        <CardSkillsContainer>
            <p>{name}</p>
            <img src={logo} alt="" srcset="" />
        </CardSkillsContainer>
    )
}