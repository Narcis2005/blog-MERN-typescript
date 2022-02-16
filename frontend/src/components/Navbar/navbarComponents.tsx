import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import { blue } from "../../utils/colors";
import { MainButton } from "../MainButton";

interface NavbarLinksProps {
    click: boolean;
}
interface backgroundColor {
    background?: string;
}

export const Nav = styled.nav<backgroundColor>`
    height: 80px;
    background: ${({ background }) => (background ? background : "transparent")};
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    z-index: 999;
    @media (max-width: 960px) {
        position: fixed;
        width: 100%;
    }
`;
export const NavbarLogo = styled.div`
    height: 100%;
    width: 10rem;
`;
export const LogoImg = styled.img`
    height: 100%;
    width: 100%;
    filter: invert(1);
`;

export const MobileIcon = styled.div`
    display: none;
    z-index: 999;
    @media (max-width: 960px) {
        display: block;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease;
        cursor: pointer;
        & * {
            display: block;
            width: 40%;
            height: 40%;
        }
    }
`;

export const NavContainer = styled(Container)`
    justify-content: space-between;
    min-width: 75%;
`;

export const NavbarLinks = styled.ul<NavbarLinksProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    @media (max-width: 960px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 80px;
        padding: 80px 0;
        width: 100%;
        min-height: 90vh;
        left: ${({ click }) => (click ? 0 : "-100%")};
        transition: all 0.5s ease;
        background: rgb(15, 15, 15);
    }
`;

export const NavItem = styled.li`
    height: 80px;
    @media (max-width: 960px) {
        margin: 3% 0;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    position: relative;
    &:hover {
        color: ${blue};
    }
    &::after {
        content: "";
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${blue};
        border-radius: 10px;
        transition: opacity 0.2s ease;
    }
    &:hover::after {
        opacity: 1;
    }

    @media (max-width: 960px) {
        font-size: 1.5rem;
        padding: 2rem;
    }
    @media (max-width: 960px) {
        font-size: 1.3rem;
    }
`;

export const LoginButton = styled(MainButton)`
    height: 40px;
    padding: 10px 20px;
    margin-left: 20%;
    border-radius: 6px;
    margin-top: 0;
    @media (max-width: 960px) {
        margin-top: 30px;
        margin-left: 0;
    }
`;
export const ProfileImageContainer = styled.div`
    width: 45px;
    height: 45px;
    /* margin-left: 1rem; */
    margin: 20px;
`;
export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
export const AddPostButton = styled(MainButton)`
    padding: 10px 20px;
    margin-top: 0;
    margin-left: 1rem;
`;
