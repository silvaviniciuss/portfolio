export const Contacts = ({ link, url }) => {
    return (
        <figure>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={url} alt={url}/>
            </a>
        </figure>
    )
}