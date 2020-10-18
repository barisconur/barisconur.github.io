import React from 'react';
import './Job.scss';

export default function Job(props) {
  const jobInfo = props.description;
  const companyLink = "https://".concat(props.description.companyLink);

  return (
  <>
    <div className="job">
      <div className="raw">
        <div className="job-company">
          <a className="name" href={companyLink} rel="noopener noreferrer" target="_blank">{jobInfo.companyName}</a>
          <p className="location">&nbsp;&nbsp;&ndash;&nbsp;&nbsp;{jobInfo.location}</p>
        </div>
        <div className="time-place-wrapper">
          <p className="time-text">{jobInfo.timePlace}</p>
        </div>
      </div>
      
      <p className="position">{jobInfo.jobTitle}</p>
    </div>
  </>
  )
}