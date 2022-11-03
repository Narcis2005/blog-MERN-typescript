import { Link } from "react-router-dom";
import {
    FooterContainer,
    FooterLink,
    FooterNav,
    FooterNavItem,
    FooterQuote,
    Logo,
    LogoImage,
    Quote,
} from "./footerComponents";
import React from "react";

const Footer = () => {
    return (
        <FooterContainer>
            <Link to="/">
                <Logo>
                    <LogoImage src="/images/logo.svg" alt="Astronomy logo" height="50" width="320" />
                </Logo>
            </Link>
            <FooterNav>
                <FooterNavItem>
                    <FooterLink to="/">Home</FooterLink>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterLink to="/blog">Blog</FooterLink>
                </FooterNavItem>
                <FooterNavItem>
                    <FooterLink to="/contact">Contact</FooterLink>
                </FooterNavItem>
            </FooterNav>
            <FooterQuote>
                <Quote>
                Across the sea of space, the stars are other suns.
                </Quote>
            </FooterQuote>
        </FooterContainer>
    );
};

export default Footer;
