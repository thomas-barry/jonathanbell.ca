import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';

import 'normalize.css';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.desc },
        { name: 'keywords', content: data.site.siteMetadata.keywords }
      ]}
    />
    <Header
      siteTitle={data.site.siteMetadata.title}
      s3Images={data.allS3Image.edges}
      siteEmail={data.site.siteMetadata.email}
    />
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        title
        desc
        keywords
        email
      }
    }
    allS3Image {
      # We pass this data along to the Nav component.
      edges {
        node {
          Key
          fields {
            portfolioSection
          }
        }
      }
    }
  }
`;
