import styled from "styled-components"

export const HeaderContainer = styled.section` 
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background: #c5c6c7;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
`

export const HeaderStyle = styled.div`
    margin-left: 30px;
    h1 {
        font-size: 50px;
    }
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
@media screen and (max-width : 1600px) {
    width: 40%;

}
@media screen and (max-width : 1160px) {
    width: 50%;

}
`

export const HeaderContacts = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    column-gap: 30px;
@media screen and (max-width : 1600px) {
    width: 60%;

}
`
