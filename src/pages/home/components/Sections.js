import React from 'react';
import AboutMe from './sections/AboutMe.js';
import Experience from './sections/Experience.js';
import Projects from './sections/Projects.js';
import Education from './sections/Education.js';
import Contact from './sections/Contact.js';
import './Sections.scss';

export default function Sections() {
  return (
  <>
    <div id="About" className="section"><AboutMe/></div>
    <div id="Experience" className="section"><Experience/></div>
    <div id="Projects" className="section"><Projects/></div>
    <div id="Education" className="section"><Education/></div>
    <div id="Contact" className="section"><Contact/></div>
  </>
  )
}