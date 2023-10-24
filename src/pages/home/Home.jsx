import { About } from "../../components/About/About"
import { Projects } from "../../components/Projects/Projects"
import { AboutSection, HomeContainer, ProjectsSection } from "./HomeStyle"

export const Home = () => {
    return (
        <HomeContainer>
            <AboutSection>
                <About />
            </AboutSection>
            <ProjectsSection>
                <Projects />
            </ProjectsSection>
        </HomeContainer>
    )
}