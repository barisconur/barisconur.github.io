import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
import SocialAccounts from './components/home-section/SocialAccounts';
import Navbar from './components/home-section/Navbar';
import Jumbotron from "./components/home-section/Jumbotron";
import Sections from "./components/Sections.js";
import "./HomePage.scss";

export default function HomePage() {
  return (
  <>
    <div id="scroll-btn"><ScrollUpButton/></div>
    <div id="social-accounts"><SocialAccounts/></div>
    
    <div id="home-section">
      <div id="nav-bar"><Navbar/></div>
      <div id="jumbotron"><Jumbotron/></div>
    </div>

    <div id="sections"><Sections/></div>
  </>
  )
}