// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import "../HomePage.scss";
import skills from "../../json/skills";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare,faJs, faReact, faVuejs, faJava} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
	return (
			<>
				<div className="title-panel">
					<h2 className="title-text">Technical Skills</h2>
					<hr className="jumbotron-line"/>
				</div>

				<div id="skills-intro-panel" className="container">
					<p className="category-text">{skills.intro}</p>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-1 col-md-2"/>
						{ displayColumns() }
						<div className="col-1 col-md-2"/>
					</div>
				</div>
				<ul id="logos-panel" className="nav justify-content-center">
					{ displaySocialMediaIcons() }
				</ul>
			</>
	);
}

function displayColumns() {
	return <>
		{skills.contents.map((type, index) => (
			<div id={type.title+"-panel"} className="col-5" key={index}>
				<h4 className="category-title">{type.title}</h4>
				{ displaySkills(type.skills) }
				</div>
	))}
</>
}

function displaySkills(skills) {
	return <>
		<ul>{skills.map((skill, index) => (
				<li className="category-text" key={index}>{skill}</li>
		))}
		</ul>
	</>
}

function displaySocialMediaIcons() {
	const links = ([
		{
			class: "github social",
			icon: faGithubSquare,
			url: "https://github.com/"
		},
		{
			class: "js social",
			icon: faJs,
			url: "https://www.javascript.com/"
		},
		{
			class: "react social",
			icon: faReact,
			url: "https://reactjs.org/"
		},
		{
			class: "vue social",
			icon: faVuejs,
			url: "https://vuejs.org/"
		},
		{
			class: "java social",
			icon: faJava,
			url: "https://www.java.com/en/"
		}
	]);

	return <>
		{links.map((link, index) => (
				<a href={link.url} rel="noopener noreferrer" target="_blank" className={link.class} key={index}>
					<FontAwesomeIcon icon={link.icon} size="8x" />
				</a>
		))}
		</>
}
