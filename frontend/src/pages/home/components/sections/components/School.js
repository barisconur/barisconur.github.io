import React from 'react';
import './School.scss';

export default function School(props) {
  const schoolInfo = props.description;

  return (
  <>
    <div className="school">
      <div className="raw">
        <div className="school-info">
          <h2 className="name">{schoolInfo.name}</h2>
          <p className="location">&nbsp;&nbsp;&ndash;&nbsp;&nbsp;{schoolInfo.location}</p>
        </div>
        <div className="time-place-wrapper">
          <p className="time-text">{schoolInfo.startTime} - {schoolInfo.endTime}</p>
        </div>
      </div>

      <p className="position">{schoolInfo.degree}</p>
    </div>
  </>
  )
}