/**
 * Gatsby's Node API: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  // Add the field `portfolioSection` to all S3 images.
  if (node.internal.type == 'S3Image') {
    createNodeField({
      node,
      name: 'portfolioSection',
      value: node.Key.split('/')[0]
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const sections = [];

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allS3Image {
          edges {
            node {
              id
              fields {
                portfolioSection
              }
            }
          }
        }
      }
    `).then(result => {
      // Populate the list of portfolio sections
      result.data.allS3Image.edges.forEach(({ node }) => {
        // Get the portfolio section name
        const sectionName = node.fields.portfolioSection;
        // Check if the S3 folder name is "registered" as a portfolio section
        if (!sections.includes(sectionName)) {
          sections.push(sectionName);
        }
      });

      sections.forEach(section => {
        createPage({
          // Create a URL friendly path based off of the section name
          path: section.replace(/\s+/g, '-').toLowerCase(),
          component: path.resolve('./src/sections/PortfolioSection.js'),
          context: {
            // Pass `section` along.
            // This will be available for us to pass along to our GraphQL query.
            section
          }
        });
      });

      resolve();
    });
  });
};
