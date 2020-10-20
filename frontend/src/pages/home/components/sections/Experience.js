import React from 'react';
import Job from './components/Job.js';
import exp from '../../../../content/jobs.json';
import '../Sections.scss';
import './Experience.scss';

export default function Experience() {
  return (
  <>
		<div className="title-panel">
			<h2 className="title-text">Experience</h2>
		</div>

    <div className="inner">
      <div className="jobs">
        {exp.prevJobs.map((job, index) => 
          <Job description={job} key={index}/>
        )}
      </div>
    </div>
  </>
  )
}
