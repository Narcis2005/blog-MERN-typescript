import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background: rgb(15,15,15);
    padding: 3em;
    & > * {
        margin-bottom: 2rem;
    }

`

export const Logo = styled.div`

    height: 50px;
    @media (max-width: 960px){
        height: 30px;
    }
`

export const LogoImage = styled.img`
    filter: invert(1);
    height: 100%;

`
export const FooterNav = styled.ul`
    display: flex;
    /* flex-direction: column; */

`

export const FooterNavItem = styled.li`
    padding: 0 15px;
    list-style: none;
`
export const FooterLink = styled(Link)`
    
`
export const FooterQuote = styled.div`
    text-align: center;

`

export const Quote = styled.p`
`