import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithubSquare, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"
import account from '../../json/socialAccounts';

export default function SocialAccounts() {
  return (
  <>
    <ul>
      <li className="social-link-item">
        <a href={account.url[0]} rel="noopener noreferrer" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={account.url[1]} rel="noopener noreferrer" target="_blank" className="linkedIn social">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={account.url[2]} rel="noopener noreferrer" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faMedium} size="2x"/>
        </a>
      </li>

      <li className="social-link-item">
        <a href={account.url[3]} rel="noopener noreferrer" target="_blank" className="medium social">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
      </li>

      <li><div className="vertical-line"/></li>
    </ul>
  </>
  )
}