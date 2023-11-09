import { useContext } from "react"
import contact from "../../constants/contacts.json"
import { Contacts } from "../Contacts/Contacts"

import { globalContext } from "../../contexts/globalContext"
import { LineOne, LineThree, LineTwo, Logo, MenuContacts, MenuHambuguer, NavContainer } from "./HeaderStyled"

export const Header = () => {
    const { hiddenMenu, setHiddenMenu }  = useContext(globalContext)

    return (
        <header>
            <NavContainer>
                <Logo>
                    <p>Vinicius da Silva</p>
                    <p>Desenvolvedor Web Full Stack</p>
                </Logo>
                <MenuHambuguer
                onClick={() => setHiddenMenu(!hiddenMenu)}
                
                >
                    <LineOne menu={hiddenMenu}></LineOne>
                    <LineTwo menu={hiddenMenu}></LineTwo>
                    <LineThree menu={hiddenMenu}></LineThree>
                </MenuHambuguer>
                <MenuContacts
                    menu={hiddenMenu}
                >
                    {contact.map((cont, index) => {
                        return <Contacts
                            key={index}
                            link={cont.link}
                            url={cont.url}
                        />
                    })}
                </MenuContacts>
            </NavContainer>
        </header>
    )
}