import React from "react"
import {Link, graphql} from "gatsby"
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

const ProjectWrapper = styled.div`
    font-size: 0.8em;
    margin: 0;
`

const ProjectTitle = styled.p`
    color: #58b368;
    font-weight: bold;
`

const ReadMore = styled(Link)`
    text-decoration: none;
    color: #58b368;
    :hover {
        text-decoration: underline;
    }
`

const Projects = ({ data }) => {

    const { edges } = data.allMarkdownRemark

    return (
        <Layout>
            <Wrapper>
                <Title to="/projects">Projects</Title>
                <Date>Last update 2020-04-19</Date>
                {edges.map(({ node }) => {
                    return (
                        <ProjectWrapper key={node.id}>
                            <ProjectTitle>{node.frontmatter.title}</ProjectTitle>
                            <p>
                                {node.excerpt}
                                <ReadMore to={node.frontmatter.path}>Read More -></ReadMore>
                            </p>
                        </ProjectWrapper>
                    )
                })}
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
query {
    allMarkdownRemark(filter: {frontmatter: {path: {regex: "/projects/"}}}, sort: {fields: id, order: DESC}) {
        edges {
            node {
                frontmatter {
                    title
                    path
                }
                id
                html
                excerpt
            }
        }
    }
}
`

export default Projects