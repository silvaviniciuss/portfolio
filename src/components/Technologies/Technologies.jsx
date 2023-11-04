import { TechnologiesContainer, TechnologiesContainerTitle, TechnologiesImageContainer } from "./TechnologiesStyle"

export const Technologies = ({ name, logo }) => {
    console.log(name, logo)
    return (
        <TechnologiesContainer>
            <TechnologiesImageContainer>
                <img src={logo} alt="" />
            </TechnologiesImageContainer>
            <TechnologiesContainerTitle>
                <p>{name}</p>
            </TechnologiesContainerTitle>
        </TechnologiesContainer>
    )
}