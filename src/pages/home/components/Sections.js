import React from 'react';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import './Sections.scss';

export default function Sections() {
  return (
  <>
    <div id="About" className="section"><AboutMe/></div>
    <div id="Experience" className="section"><Experience/></div>
    <div id="Projects" className="section"><Projects/></div>
    <div id="Education" className="section"><Education/></div>
  </>
  )
}