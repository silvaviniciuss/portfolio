import { CardSkillsContainer } from "./CardSkillsStyled"

export const CardSkills = ({ name, logo }) => {
    
    return (
        <CardSkillsContainer>
            <p>{name}</p>
            <img src={logo} alt={name} />
        </CardSkillsContainer>
    )
}
