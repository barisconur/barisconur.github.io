import React, {Fragment} from 'react';
import '../home-page/HomePage.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import about from '../../json/aboutMe';

export default function SocialFollow() {
    console.log(about.URL[0]);

    return (
        <Fragment>
            <a href={about.URL[0]} rel="noopener noreferrer" target="_blank" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={about.URL[1]} rel="noopener noreferrer" target="_blank" className="github social">
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a href={about.URL[2]} rel="noopener noreferrer" target="_blank"className="linkedIn social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </Fragment>
    )

}

