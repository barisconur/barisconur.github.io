import React from "react";
import Project from './components/Project.js';
import projects from '../../../../content/projects.json';
import '../Sections.scss';
import './Projects.scss';

export default function Projects() {
	return (
	<>
		<div className="title-panel">
			<h2 className="title-text">Projects</h2>
		</div>

		<div className="inner">
			{projects.prevProjects.map((project, index) => 
				<Project description={project} key={index}/>
			)}
    </div>
	</>
	)
}