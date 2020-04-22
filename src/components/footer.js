import React from "react"
import styled from "styled-components"
//Components
import { CustomExternalLink } from '../components/common'

const SocialInfo = styled.div`
    text-align: center;
    font-style: italic;
`

const Footer = () => (
    <SocialInfo>
        <p>
            <CustomExternalLink href="https://github.com/nicolas-camacho" target="_blank">GitHub</CustomExternalLink>
            <span> ・ </span>
            <CustomExternalLink href="https://linkedin.com/in/nicolas-camacho-aguilar/" target="_blank">Linkedin</CustomExternalLink>
        </p>
    </SocialInfo>
)

export default Footer