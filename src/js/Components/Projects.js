// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import education from "../../json/education";

import "../../sass/HomePage.scss";

export default function Projects() {
	return (
			<>
				<div className="title-panel">
					<h2 className="title-text">Projects</h2>
					<hr className="jumbotron-line"/>
				</div>
        
				<div className="schools-panel">{ displayProjects() }</div>
			</>
	);
}

function displayProjects() {
	let length = education.projects.length;
	return <>
		{education.projects.map((project, index) => {
			return <div id="school" key={index} className="container">
				<h2 className="category-title">{project.name}</h2>
				<p className="category-text">{project.description}</p>
				{putSeparator(length, index)}
			</div>
		})}
	</>
}

function putSeparator(length, index) {
	if (length === index + 1) {
		return null;
	}
	return <div className="separator"/>;
}