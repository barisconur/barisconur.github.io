import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Navbar() {
  const sectionLinks = ([
    {text: 'About'},
    {text: 'Experience'},
    {text: 'Projects'},
    {text: 'Education'},
    {text: 'Contact'}
  ])
  
  return (
  <nav>
    <ol>
      {sectionLinks.map((link, index) =>
        <li className="link-item" key={index}> 
          <AnchorLink className="link" href={"#" + link.text}>{link.text}</AnchorLink>
        </li>
      )}
      <div className="btn-list">
        <button type="button" id="resume-btn" className="btn btn-outline-success btn">Resume</button>
        <Link to="/blog"><button type="button" id="blog-btn" className="btn btn-outline-danger btn">Blog</button></Link>
      </div>
    </ol>
  </nav>
  )
}
