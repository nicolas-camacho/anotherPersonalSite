import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
//styles
import './navbar.css'

const StyledLink = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: #58b368;
    :hover {
        text-decoration: underline;
    }
`
const HomeLink = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: black;
    :hover {
        color: #58b368;
        text-decoration: underline; 
    }
`

const Navbar = () => (
    <div className={`nav-container`}>
        <div>
            <HomeLink to="/">Nicolas Camacho</HomeLink>
        </div>
        <div className={`links-container`}>
            <p>
                <StyledLink to="/projects">projects</StyledLink>
                <span> - </span>
                <StyledLink to="/blog">blog</StyledLink>
                <span> - </span>
                <StyledLink to="/interests">interests</StyledLink>
            </p>
        </div>
    </div>
)

export default Navbar