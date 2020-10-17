import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons"
import conf from '../../../../config';
import './SocialAccounts.scss';

export default function SocialAccounts() {
  const accounts = conf.socialMedia;
  return (
  <>
    <ul>
      <li className="social-link-item">
        <a href={accounts[0].url} rel="noopener noreferrer" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={accounts[1].url} rel="noopener noreferrer" target="_blank" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={accounts[2].url} rel="noopener noreferrer" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faMediumM} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={accounts[3].url} rel="noopener noreferrer" target="_blank" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
      </li>

      <li><div className="vertical-line"/></li>
    </ul>
  </>
  )
}