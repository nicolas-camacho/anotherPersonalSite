/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve(`./src/components/projectTemplate.js`);
    const postTemplate = path.resolve(`./src/components/postTemplate.js`);

    const projects = await graphql(`
        {
            allMarkdownRemark(filter: {frontmatter: {path: {regex: "/projects/"}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            tags
                            path
                            date
                        }
                        html
                    }
                }
            }
        }
    `).then(result => result.data)

    projects.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.frontmatter.path
        createPage({
            path,
            component: projectTemplate,
            context: {
                pathSlug: path
            },
        })
    })

    const posts = await graphql(`
        {
            allMarkdownRemark(filter: {frontmatter: {path: {regex: "/blog/"}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            path
                            date
                        }
                        html
                    }
                }
            }
        }
    `).then(result => result.data)

    posts.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.frontmatter.path
        createPage({
            path,
            component: postTemplate,
            context: {
                pathSlug: path
            },
        })
    })
};
