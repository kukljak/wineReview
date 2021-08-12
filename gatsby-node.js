/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query MyQueryCreatePage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            data {
              title
            }
          }
        }
      }
    }        
    `);
       
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: "/" + node.frontmatter.data.title,
            component: path.resolve("./src/templates/wineInfo.js"),
            context: {slug: node.frontmatter.slug}
        })
    });
}