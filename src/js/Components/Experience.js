// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import "../../sass/HomePage.scss";
import experiences from "../../json/experience";
import about from "../../json/aboutMe";

import locationIcon from "../../images/location-sign.svg";

export default function Experience() {
	return (
			<>
				<div className="title-panel">
					<h2 className="title-text">Experience</h2>
					<hr className="jumbotron-line"/>
				</div>

				<div className="experiences-panel">{ displayExperiences() }</div>
			</>
	);
}

function displayExperiences() {
	let length = experiences.companies.length;
	return <>
		{experiences.companies.map((company, index) => {
			return <div id="company" key={index} className="container">
				<h2 className="category-title">{company.name}</h2>
				<h4 id="position" className="category-text">{company.position}</h4>
				<div id="location-panel">
					<img className="location-icon" src={locationIcon} alt="home-icon"/>
					<h4 id="location" className="category-text">{company.location}</h4>
				</div>
				<p className="category-text">{company.description}
				{<a rel="noopener noreferrer" target="_blank" href={about.URL[1] +"/todo-app"}> my personal github page. </a>}
				You can reach the official webpage of the company via <a  rel="noopener noreferrer" target="_blank" href="https://www.netrd.com.tr/homePage.html"
																																	id="location" className="category-text">this link
					</a>.
				</p>

				{displayTimePeriod(company)}
				{putSeparator(length, index)}
			</div>
		})}
	</>
}

function displayTimePeriod(company) {
	return <p className="category-text"><strong>Time : </strong> {company.period}</p>

}

function putSeparator(length, index) {
	if (length === index + 1) {
		return null;
	}
	return <div className="separator"/>;
}