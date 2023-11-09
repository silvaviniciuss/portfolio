import { About } from "../../components/About/About"
import { Projects } from "../../components/Projects/Projects"
import { HomeContainer } from "./HomeStyle"


export const Home = () => {
    return(
        <HomeContainer>
            <About/>
            <Projects/>
        </HomeContainer>
    )
}