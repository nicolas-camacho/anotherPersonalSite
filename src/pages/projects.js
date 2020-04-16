import React from "react"
import {Link} from "gatsby"
//Components
import Layout from "../components/layout"
import styled from "styled-components"

const Wrapper = styled.div`
    font-size: 1.5em;
    text-align: left;
    margin: 5px;
    margin-top: 50px;
    @media (mid-width: 600px) {
        margin: 0;
    }
`

const Title = styled(Link)`
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    :hover {
        color: #58b368;
    }
`
const Date = styled.span`
    font-size: 0.8em;
    color: gray;
    display: block;
`

const Projects = () => (
    <Layout>
        <Wrapper>
            <Title to="/projects">Projects</Title>
            <Date>Last update Today</Date>
        </Wrapper>
    </Layout>
)

export default Projects