// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import "../home-page/HomePage.scss";
import education from "../../json/education";
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
	return <>
		{education.schools.map((school, index) => (
			<div className="school" key={index}>
				<h2 className="category-title">{school.name}</h2>
				<h4 id="department" className="category-text">{school.department}</h4>
				<p className="category-text">{school.description}</p>
				{displayGraduationStatus(school)}
			</div>
	))}
	</>
}

function displayGraduationStatus(school) {
	let graduationYear = parseInt(school.graduateData);
	let currentYear = new Date().getFullYear();

	if (graduationYear === currentYear || graduationYear === currentYear + 1) {
		return <p className="category-text"><strong>Graduating in: </strong>{"Summer " + school.graduateData}</p>
	}
	return <p className="category-text"><strong>Graduated: </strong> {school.graduateData}</p>
}