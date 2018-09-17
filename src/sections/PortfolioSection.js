import React, { Component } from 'react';
import Img from 'gatsby-image';

export default class PortfolioSection extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    if (data.images.edges.length < 1) return null;
    return (
      <article>
        <h1 className="section-heading visuallyhidden">
          {`${data.images.edges[0].node.fields.portfolioSection.replace(
            /-/g,
            ' '
          )}`}
        </h1>
        {data.images.edges.map(({ node }) => {
          if (node.file) {
            return (
              <div
                key={node.id.replace(/[^A-Z0-9]/gi, '-')}
                id={node.id.replace(/[^A-Z0-9]/gi, '-')}
                className="portfolio-image"
              >
                <Img
                  alt={`Photography by ${data.site.siteMetadata.title}`}
                  sizes={node.file.image.sizes}
                />
              </div>
            );
          } else {
            return (
              <div key={node.id} className="portfolio-image">
                <img
                  alt={`A photograph taken by ${data.site.siteMetadata.title}`}
                  src={node.Url}
                />
              </div>
            );
          }
        })}
      </article>
    );
  }
}

export const query = graphql`
  query ImagesQuery($section: String!) {
    images: allS3Image(
      filter: { fields: { portfolioSection: { eq: $section } } }
    ) {
      edges {
        node {
          fields {
            portfolioSection
          }
          id
          Url
          file: localFile {
            image: childImageSharp {
              sizes(maxWidth: 1100, quality: 97) {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
