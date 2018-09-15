import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    <h1>NOT FOUND - Homey don't play that!</h1>
    <p>
      That page doesn't exist. <Link to="/">Go home</Link> and try again.
    </p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/YxYvzVxJtYM?rel=0&amp;showinfo=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      style={{
        border: 0
      }}
    />
  </div>
);

export default NotFoundPage;
