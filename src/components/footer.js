import React from "react"
import styled from "styled-components"

const SocialInfo = styled.div`
    text-align: center;
`
const SocialLink = styled.a`
    text-decoration: none;
    color: #58b368;
    font-style: italic;
    :hover {
        text-decoration: underline;
    }
`

const Footer = () => (
    <SocialInfo>
        <p>
            <SocialLink href="https://github.com/nicolas-camacho">GitHub</SocialLink>
            <span> ・ </span>
            <SocialLink href="https://linkedin.com/in/nicolas-camacho-aguilar/">Linkedin</SocialLink>
        </p>
    </SocialInfo>
)

export default Footer