import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 2.5em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 1em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 1em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-top: 0.25em;
        padding-bottom: 1em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/resume">
                    Resume
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Projects
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
                <a href="https://www.linkedin.com/in/regould/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/rachelgould" target="_blank" rel="noopener noreferrer">GitHub</a>
                <Link
                    activeClassName="Link--is-active"
                    to="/contact">
                    Contact
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;