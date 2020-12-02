import React from 'react';
import './Course.scss';

export default function Course(props) {
  const course = props.description;
  return (
  <>
    <div className="course">
      <div className="title-section"> 
        <h2 className="course-code">{course.id} -</h2>
        <h2 className="course-name">&nbsp;{course.name}</h2>
      </div>
      
    </div>
  </>
  )
}