import React, {Fragment} from 'react';
import "./HomePage.scss";
import Jumbotron from "../Components/Jumbotron";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class HomePage extends React.Component {

    render() {
        return (
            <div id="home-page-container">
                <div id="header"> <Jumbotron/> </div>
                <Fragment>
                    {this.displayLinks()}
                </Fragment>
            </div>
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

        return <Router>
            <div id="links">
                <ul>
                    {links.map((link, index) => (
                        <li className="link-container" key={index}> <Link to={"/" + link.text}>{link.text}</Link> </li>
                    ))}
                </ul>
            </div>
        </Router>
    }
}
