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
      allPost {
        nodes {
          title
        }
      }
    }            
    `);
       
    data.allPost.nodes.forEach(node => {
        actions.createPage({
            path: "/" + node.title,
            component: path.resolve("./src/templates/wineInfo.js"),
            context: {title: node.title}
        })
    });
}