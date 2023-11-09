import { TechnologiesContainer, TechnologiesContainerTitle, TechnologiesImageContainer } from "./TechnologiesStyled"

export const Technologies = ({ name, logo }) => {

    return (
        <TechnologiesContainer>
            <TechnologiesImageContainer>
                <img src={logo} alt={name} />
            </TechnologiesImageContainer>
            <TechnologiesContainerTitle>
                <p>{name}</p>
            </TechnologiesContainerTitle>
        </TechnologiesContainer>
    )
}