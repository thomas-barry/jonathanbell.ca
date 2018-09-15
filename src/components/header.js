import React from 'react';
import Link from 'gatsby-link';

import Nav from './nav';

const Header = ({ siteTitle, siteEmail, s3Images }) => (
  <div className="masthead">
    <h1 className="site-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Nav s3Images={s3Images} email={siteEmail} />
  </div>
);

export default Header;
