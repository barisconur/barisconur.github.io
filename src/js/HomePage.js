// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';
import ScrollUpButton from "react-scroll-up-button";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Jumbotron from "./Components/Jumbotron";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Courses from "./Components/Courses";
import Projects from "./Components/Projects"
import Experience from "./Components/Experience";

import "../sass/HomePage.scss";

export default function HomePage() {
  return (
    <>
      <div id="home-page-container">
        <h2 id="last-modified-text">Last modified: 05.03.2020</h2>
        <div id="header"><Jumbotron/></div>
        <div id="links">{ displayLinks() }</div>
      </div>

      <div id="About" className="section"><AboutMe/></div>
      <div id="Skills" className="section"><Skills/></div>
      <div id="Education" className="section"><Education/></div>
      <div id="Courses" className="section"><Courses/></div>
      <div id="Projects" className="section"><Projects/></div>
      <div id="Experience" className="section"><Experience/></div>

      <div id="home-page-button"><ScrollUpButton/></div>
    </>
  );
}

function displayLinks() {
  const links = ([
    {text: 'About'},
    {text: 'Skills'},
    {text: 'Education'},
    {text: 'Courses'},
    {text: 'Projects'},
    {text: 'Experience'}
  ]);
  return <nav id="links">
    <ul>{links.map((link, index) =>
      <li className="link-container" key={index}> <AnchorLink className="link" href={"#" + link.text}>{link.text}</AnchorLink></li>
      )}
    </ul>
  </nav>
}