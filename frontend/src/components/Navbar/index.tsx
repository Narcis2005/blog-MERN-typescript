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
    AddPostButton,
    NewLink,
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
                        <LogoImg src="/images/logo.svg" alt="astronomy logo" height="25" width="160" />
                    </NavbarLogo>
                </Link>
                <NavbarLinks onClick={() => setClick(false)} click={click}>
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
                        <NavItem>
                            <NewLink to="/login">
                                <LoginButton>Login</LoginButton>
                            </NewLink>
                        </NavItem>
                    )}
                    {image && (
                        <>
                            <NavItem>
                                <NewLink to="/profile">
                                    <ProfileImageContainer>
                                        <ProfileImage src={image} alt="Profile Image" height="45" width="45" />
                                    </ProfileImageContainer>
                                </NewLink>
                            </NavItem>

                            <NavItem>
                                <NewLink to="/blog/add">
                                    <AddPostButton>Add Post</AddPostButton>
                                </NewLink>
                            </NavItem>
                        </>
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
