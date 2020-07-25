// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare, faMedium } from "@fortawesome/free-brands-svg-icons"
import about from '../../json/aboutMe';

import '../../sass/HomePage.scss';

export default function SocialFollow(props) {
  console.log(props.browserWidth);
  if (props.browserWidth <= 768) {
    return (
      <>
        <a href={about.URL[0]} rel="noopener noreferrer" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
        </a>
        <a href={about.URL[1]} rel="noopener noreferrer" target="_blank"className="linkedIn social">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a href={about.URL[2]} rel="noopener noreferrer" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faMedium} size="2x"/>
        </a>
      </>
    )
  } else {
    return (
      <>
        <a href={about.URL[0]} rel="noopener noreferrer" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
        </a>
        <a href={about.URL[1]} rel="noopener noreferrer" target="_blank"className="linkedIn social">
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>
        <a href={about.URL[2]} rel="noopener noreferrer" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faMedium} size="3x"/>
        </a>
      </>
    )
  }
}
