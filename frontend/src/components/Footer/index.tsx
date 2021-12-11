import { Link } from "react-router-dom";
import { FooterContainer, FooterLink, FooterNav, FooterNavItem, FooterQuote, Logo, LogoImage, Quote } from "./footerComponents";

const Footer = () => {
    return (
        <FooterContainer>
            <Link to="/">
                <Logo>
                    <LogoImage src="/images/logo.svg" />
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
                <Quote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto dolore, ea aliquid nam dignissimos?</Quote>
            </FooterQuote>
        </FooterContainer>
    )
}

export default Footer;