import React from "react"
//Components
import Layout from "../components/layout"
import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 1.5em;
    text-align: left;
    margin: 5px;

    @media (mid-width: 600px) {
        margin: 0;
    }
`

const Title = styled.p`
    font-size: 1.7em;
    font-weight: bold;
    color: #58b368;
`

const Projects = () => (
    <Layout>
        <Title>Projects</Title>
        <Wrapper>
        </Wrapper>
    </Layout>
)

export default Projects