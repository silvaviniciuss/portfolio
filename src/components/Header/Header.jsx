import { HeaderContacts, HeaderContainer, HeaderStyle } from "./HeaderStyle"
import contacts from "../../constants/contacts.json"
import { Contacts } from "../Contacts/Contacts"

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderStyle>
                <h1>VINÍCIUS DA SILVA</h1>
                <h3>Desenvolvedor Web Full Stack</h3>
            </HeaderStyle>
            <HeaderContacts>
                {
                    contacts.map((contact) => {
                        return <Contacts
                            url={contact.url}
                            link={contact.link}
                        />
                    })
                }
            </HeaderContacts>
        </HeaderContainer>
    )
}