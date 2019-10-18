import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterLink = styled("a")`
    transition: all 100ms ease-in-out;
    color: ${colors.purple900};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
        transition: all 200ms ease-in-out;
         color: ${colors.purple600};
    }
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <Logo />
        </Link>
        <FooterLink href="mailto:rachel@rachelgould.dev">rachel@rachelgould.dev</FooterLink>
        <FooterLink href="https://github.com/rachelgould/rachelgould-dev">View site repo</FooterLink>
    </FooterContainer>
)

export default Footer;
