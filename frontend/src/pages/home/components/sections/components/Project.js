import React from 'react';
import './Project.scss';

export default function Project(props) {
  const proj = props.description;
  return (
  <>
    <div className="project">
      <div className="title-section"> 
        <a className="name" href={proj.githubLink} rel="noopener noreferrer" target="_blank">{proj.title}</a>
      </div>
      <p>{proj.description}</p>

      <div className="keywords-section">{renderKeywords(proj)}</div>
    </div>
  </>
  )
}

function renderKeywords(proj) {
  return (
  <>
    {proj.keywords.map((keyword, index) =>
      <span className="keyword" key={index}>{keyword}</span>
    )}
  </>
  )
}