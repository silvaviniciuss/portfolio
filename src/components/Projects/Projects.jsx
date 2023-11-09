import { ProjectCard } from "./ProjectCard/ProjectCard"
import { ProjectsCardContaier, ProjectsContainer, ProjectsTitle } from "./ProjectsStyled"
import { projects } from "../../constants/projects"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Projects = () => {

    return (
        <ProjectsContainer>
            <ProjectsTitle>
                <h1>PROJETOS</h1>
            </ProjectsTitle>
            <ProjectsCardContaier>
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {projects.map((project) => {
                        return (
                            <SwiperSlide>
                                <ProjectCard
                                    project={project}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </ProjectsCardContaier>
        </ProjectsContainer>
    )
}
