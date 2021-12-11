import React, { useState } from "react";
import { Nav, NavbarLogo, LogoImg, MobileIcon, NavContainer, NavItem, NavbarLinks, NavLink, LoginButton} from "./navbarComponents";
import {FaTimes, FaBars} from "react-icons/fa"
import { Link } from "react-router-dom";

const Navbar = ({background} : {background?: string}) => {
    const [click, setClick] = useState(false)
    return (
        <Nav background={background}>
            <NavContainer>
                <Link to="/">
                    <NavbarLogo>
                        <LogoImg src="/images/logo.svg" />
                    </NavbarLogo>
                </Link>
                <NavbarLinks onClick= {() => setClick(oldClick => !oldClick)} click= {click}>
                    <NavItem>
                       <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink to="/blog">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink to="/contact">Contact</NavLink>
                    </NavItem>
                    <Link to="/login">
                        <LoginButton>Login</LoginButton>
                     </Link>    
                </NavbarLinks>
                
                <MobileIcon onClick= {() => setClick(oldClick => !oldClick)}>
                    {click ? <FaTimes /> : <FaBars/>}
                </MobileIcon>
            </NavContainer>
         </Nav>
               
    )
}

export default Navbar;