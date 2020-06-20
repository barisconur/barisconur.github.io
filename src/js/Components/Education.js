// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import education from "../../json/education";

import "../../sass/HomePage.scss";

export default function Education() {
	return (
			<>
				<div className="title-panel">
					<h2 className="title-text">Education</h2>
					<hr className="jumbotron-line"/>
				</div>
        
				<div className="schools-panel">{ displaySchools() }</div>
			</>
	);
}

function displaySchools() {
	let length = education.schools.length;
	return <>
		{education.schools.map((school, index) => {
			return <div id="school" key={index} className="container">
				<h2 className="category-title">{school.name}</h2>
				<h4 id="department" className="category-text">{school.department}</h4>
				<p className="category-text">{school.description}</p>
				{displayGraduationStatus(school)}
				{putSeparator(length, index)}
			</div>
		})}
	</>
}

function displayGraduationStatus(school) {
	return <p className="category-text"><strong>Graduated: </strong> {school.graduateData}</p>
}

function putSeparator(length, index) {
	if (length === index + 1) {
		return null;
	}
	return <div className="separator"/>;
}