import React, {Fragment} from 'react';
import "./HomePage.scss";
import Jumbotron from "../Components/Jumbotron";
import AboutMe from "../Components/AboutMe";

export default class HomePage extends React.Component {

    render() {
        return (
            <Fragment>
                <div id="home-page-container">
                    <div id="header"> <Jumbotron/> </div>
                    <div id="links">{ this.displayLinks() }</div>
                </div>
                <div id="about-me-container" className="section"><AboutMe/> </div>
                {/*<div className="section" id="experience-section"><AboutMe/></div>*/}
                {/*<div className="section" id="education-section"><AboutMe/></div>*/}
                {/*<div className="section" id="portfolio-section"><AboutMe/></div>*/}
                {/*<div className="section" id="Contact-section"><AboutMe/></div>*/}
            </Fragment>

        );
    }

    displayLinks = () => {
        const links = ([
            {text: 'About Me'},
            {text: 'Skills'},
            {text: 'Experience'},
            {text: 'Education'},
            {text: 'Portfolio'},
            {text: 'Contact'},
        ]);
        return <Fragment>
                <ul>{links.map((link, index) => (
                    <li className="link-container" key={index}> <a className="link" href={"#" + link.text}>{link.text}</a> </li>
                    ))}
                </ul>
            </Fragment>
    }
}
