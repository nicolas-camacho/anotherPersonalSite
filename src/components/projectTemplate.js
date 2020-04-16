import React from 'react'
import { graphql } from 'gatsby'
//Components
import Layout from './layout'

const ProjectTemplate = ({ data }) => {
    const project = data.markdownRemark
    const { title } = project.frontmatter

    return (
        <Layout>
            <div>
                <p>{title}</p>
                <div dangerouslySetInnerHTML={{__html: project.html }} />
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
            }
        }
    }
`

export default ProjectTemplate