import React from 'react';
import person from '../../../../content/me.json';
import './GetInTouch.scss';

export default function GetInTouch() {
  const emailLink = "mailto:".concat(person.email);  
  return (
  <>
    <button type="button" id="get-in-touch-btn" className="btn btn-outline-primary btn">
      <a href={emailLink} className="link">Get In Touch</a>
    </button>
  </>
  )
}