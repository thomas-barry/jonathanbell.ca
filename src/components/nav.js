import React, { Component } from 'react';
import Link from 'gatsby-link';

const sections = [];

export default class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        {this.props.s3Images.forEach(({ node }) => {
          const sectionName = node.fields.portfolioSection;

          if (!sections.includes(sectionName)) {
            sections.push(sectionName);
          }
        })}
        {sections.map(section => {
          return (
            <div key={section}>
              <Link to={`/${section.replace(/\s+/g, '-').toLowerCase()}`}>
                {section.replace(/-/g, ' ')}
              </Link>
            </div>
          );
        })}
        <hr />
        <div>
          <a href="http://vimeo.com/jonathanbell">Video</a>
        </div>
        <div>
          <a href="http://log.jonathanbell.ca/">Log</a>
        </div>
        <div>
          <a href="http://credittocreation.jonathanbell.ca/">Tumblr</a>
        </div>
        <div>
          <a href={`mailto:${this.props.email}`}>Email</a>
        </div>
      </nav>
    );
  }
}
