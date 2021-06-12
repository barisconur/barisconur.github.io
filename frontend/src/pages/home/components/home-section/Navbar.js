import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.scss';
import GetInTouch from './GetInTouch';

export default function Navbar() {
  const sectionLinks = ([
    {text: 'About'},
    {text: 'Experience'},
    {text: 'Projects'},
    {text: 'Education'}
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
        <button type="button" id="resume-btn" className="btn btn-outline-success btn">
          <a href={require("../../../../content/my_cv.pdf")} download="myFile">Resume</a>
        </button>
        <GetInTouch/>
      </div>
    </ol>
  </nav>
  )
}
