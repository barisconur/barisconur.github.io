import React from 'react';
import School from './components/School.js';
import Course from './components/Course.js';
import education from '../../../../content/education.json';
import '../Sections.scss';
import './Education.scss';

export default function Education() {
  return (
  <>
    <div className="title-panel">
      <h2 className="title-text">Education</h2>
    </div>

    <div className="inner">
      <div className="schools">
        {education.schoolHistory.map((school, index) => 
          <School description={school} key={index}/>
        )}
      </div>

      <div className="courses">
        <p className="course-header">Here are the few taken courses in university:</p>
        <ul className="courses-list">
          {education.takenCourses.map((course, index) => 
            <Course description={course} key={index}> {course}</Course>
          )}
        </ul>
      </div>
    </div>
  </>
  )
}