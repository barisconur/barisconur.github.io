// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';
import "./HomePage.scss";
import homeIcon from '../images/arrow_upward-24px.svg';
import Jumbotron from "./Components/Jumbotron";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Courses from "./Components/Courses";
import Experience from "./Components/Experience";

export default function HomePage() {
  return (
      <>
        <div id="home-page-container">
          <div id="header"><Jumbotron/></div>
          <div id="links">{ displayLinks() }</div>
        </div>

        <div id="about-me-container" className="section"><AboutMe/></div>
        <div id="skills-container" className="section"><Skills/></div>
        <div id="education-container" className="section"><Education/></div>
        <div id="courses-container" className="section"><Courses/></div>
        <div id="experience-container" className="section"><Experience/></div>

        <div id="home-page-button">
          <button>
            <img className="list-icon" src={homeIcon} alt="home-icon"/>
          </button>
        </div>
      </>

  );
}

function displayLinks() {
  const links = ([
    {text: 'About Me'},
    {text: 'Skills'},
    {text: 'Education'},
    {text: 'Courses'},
    {text: 'Experience'}
  ]);
  return <>
    <ul>{links.map((link, index) =>
      <li className="link-container" key={index}> <a className="link" href={"#" + link.text}>{link.text}</a> </li>
      )}
    </ul>
  </>
  }
