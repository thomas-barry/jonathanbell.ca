import React from 'react';
import Img from 'gatsby-image';

// Gatsby runs its magic to create the `data` parameter which we pass below.
// `data` comes from the GraphQL query at the bottom of this file. Neato! : )
const IndexPage = ({ data }) => (
  <div className="splash-image">
    <Img
      alt={`A photo taken by ${data.site.siteMetadata.title}`}
      sizes={
        data.images.edges[
          Math.floor(Math.random() * Math.floor(data.images.edges.length - 1))
        ].node.file.image.sizes
      }
    />
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    images: allS3Image {
      edges {
        node {
          file: localFile {
            image: childImageSharp {
              sizes(maxWidth: 813, quality: 95) {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
