import { AboutContainer, AboutDescription, AboutSkills, AboutSkillsCardContainer, AboutSkillsCardTitle, ProfileImage } from "./AboutStyled"
import profileImage from "../../assets/profile-image.jpg"
import { skills } from "../../constants/skills"
import { CardSkills } from "../CardSkills/CardSkills"

import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"
import {register} from 'swiper/element/bundle'
import { useEffect } from "react"


export const About = () => {

    useEffect(()=>{
        register()
    },[])

    return (
        <AboutContainer>
            <ProfileImage>
                <img src={profileImage} alt="Imagem Perfil" />
            </ProfileImage>
            <AboutDescription>
                <p>Sou graduado em Gestão da tecnologia da informação e formado em
                    Desenvolvimento Web Fullstack pelo bootcamop da Labenu , onde através de
                    projetos adquiri experiência em desenvolvimento utilizando tecnologias
                    como JavaScript, React, typescript entre outras. Formado no Bootcamp Santander
                    Java+Angular FullStack. Minha experiência mais recente foi como
                    pessoa instrutora de trânsito, durante 4 anos.
                </p>
            </AboutDescription>
            <AboutSkills>
                <AboutSkillsCardTitle>
                    <h1>HABILIDADES</h1>
                </AboutSkillsCardTitle>
                <AboutSkillsCardContainer>
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay:500,
                            disableOnInteraction: false
                        }}
                    >
                        {skills.map((card) => {
                            return (
                                <SwiperSlide>
                                    <CardSkills
                                        name={card.name}
                                        logo={card.logo}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </AboutSkillsCardContainer>
            </AboutSkills>
        </AboutContainer>
    )
}