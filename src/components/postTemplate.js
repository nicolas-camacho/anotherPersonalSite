import React from 'react'
import { graphql } from 'gatsby'
//Components
import Layout from './layout'

const PostTemplate = ({ data }) => {
    const post = data.markdownRemark
    const { title } = post.frontmatter

    return (
        <Layout>
            <div>
                <p>{title}</p>
                <div dangerouslySetInnerHTML={{__html: post.html }} />
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
                date
            }
        }
    }
`

export default PostTemplate