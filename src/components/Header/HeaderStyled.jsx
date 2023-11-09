import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
    background: #c5c6c7;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
`

export const Logo = styled.div`
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
    font-weight: 550;
`

export const MenuContacts = styled.div`
    display: flex;
    column-gap: 2%;

    @media (max-width: 999px) {
        position: absolute;
        top: 8vh;
        right: 0;
        width: 30vw;
        flex-direction: column;
        height: 100vh;
        background: #c5c6c7;
        align-items: center;
        justify-content: space-around;

        transform: ${({ menu }) => menu ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.6s ease-in;
        z-index: 2;
    }

`

export const MenuHambuguer = styled.div`
    cursor: pointer;
    display: none;
    div {
        width: 32px;
        height: 2px;
        background: black;
        margin: 8px;
    }

    @media (max-width: 999px) {
        display: block;
    }

`

export const LineOne = styled.div`
    transform: ${({ menu }) => menu ? 'rotate(-45deg) translate(-8px, 8px)' : 'rotate(0) translate(0)'};
    transition: transform 0.2s ease;
`

export const LineTwo = styled.div`
   opacity: ${({ menu }) => menu ? '0' : '1'};
   transition: transform 0.2s ease;
`

export const LineThree = styled.div`
    transform: ${({ menu }) => menu ? 'rotate(45deg) translate(-5px, -7px)' : 'rotate(0) translate(0)'};
    transition: transform 0.2s ease;
`