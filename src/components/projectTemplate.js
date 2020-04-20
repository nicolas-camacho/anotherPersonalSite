import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
//Components
import Layout from './layout'

const InfoLink = styled.a`
    text-decoration: none;
    color: #58b368;
    :hover {
        text-decoration: underline;
    }
`

const DateSpan = styled.span`
    color: gray
`

const ImgSite = styled(Img)`
    border-radius: 5px;
`

const ProjectTemplate = ({ data }) => {
    const project = data.markdownRemark
    const { title, featuredImage, url, github, date } = project.frontmatter

    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <DateSpan>Last Update {date}</DateSpan>
                <div dangerouslySetInnerHTML={{__html: project.html }} />
                <ImgSite fluid={featuredImage.childImageSharp.fluid} />
                <p>
                    <InfoLink href={url} target="_blank">url</InfoLink>
                    <span> ・ </span>
                    <InfoLink href={github} target="_blank">github</InfoLink>
                </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
                tags
                date
                github
                url
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default ProjectTemplate