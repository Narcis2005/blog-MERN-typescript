import React, { useState } from "react";
import {
    Nav,
    NavbarLogo,
    LogoImg,
    MobileIcon,
    NavContainer,
    NavItem,
    NavbarLinks,
    NavLink,
    LoginButton,
    ProfileImage,
    ProfileImageContainer,
} from "./navbarComponents";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ background, image }: { background?: string; image?: string }) => {
    const [click, setClick] = useState(false);
    return (
        <Nav background={background}>
            <NavContainer>
                <Link to="/">
                    <NavbarLogo>
                        <LogoImg src="/images/logo.svg" />
                    </NavbarLogo>
                </Link>
                <NavbarLinks onClick={() => setClick((oldClick) => !oldClick)} click={click}>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/blog?page=1">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavItem>
                    {!image && (
                        <Link to="/login">
                            <LoginButton>Login</LoginButton>
                        </Link>
                    )}
                    {image && (
                        <Link to="/profile">
                            <ProfileImageContainer>
                                <ProfileImage src={image} />
                            </ProfileImageContainer>
                        </Link>
                    )}
                </NavbarLinks>

                <MobileIcon onClick={() => setClick((oldClick) => !oldClick)}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
