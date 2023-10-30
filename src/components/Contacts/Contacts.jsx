import { ContactImage } from "./ContactsStyle"

export const Contacts = ({url, link}) => {
    return (
        <ContactImage>
            <a href={link} target="blank"><img src={url} alt="" /></a>
        </ContactImage>
    )
}