import React from "react"
import {Link, graphql} from "gatsby"
//Components
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Wrapper, Title, Date } from "../components/common"

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
                <Date>Last update 2020-04-21</Date>
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
    allMarkdownRemark(filter: {frontmatter: {path: {regex: "/projects/"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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