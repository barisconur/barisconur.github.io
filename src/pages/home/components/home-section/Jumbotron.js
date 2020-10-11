import React from 'react';
import person from '../../json/jumbotron';

export default function Jumbotron() {
  return (
  <>
    <h2 id="greet-text">Hello, this is</h2>
    <h1 id="name-text">{person.name}.</h1>
    <h1 id="short-summary-text">{person.short_summary}.</h1>
    <p id="summary-text">{person.summary}.</p>
  </>
  )
}