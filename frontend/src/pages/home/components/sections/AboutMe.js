import React from "react";
import me from "../../../../content/me.json";
import './AboutMe.scss';

export default function AboutMe() {
	return (
	<>
		<div className="title-panel">
			<h2 className="title-text">About&nbsp;Me</h2>
		</div>

		<div className="inner">
			<div className="summary-panel">
				<div className="paragraph-list">{renderParagraph()}</div>
				<div className="skill-set">{renderSkillset()}</div>
			</div>
			<div className="profile-panel">
				<img src={require('../../../../styles/images/me.jpg')} className="img-fluid" alt="profile"/>
			</div>
		</div>
	</>
	)
}

function renderParagraph() {
	const p1 = me.paragraphs[0];
	const p2 = me.paragraphs[1];
	const p4 = me.paragraphs[2];
	return (
	<>
		<p className="paragraph-text">{p1}</p>
		<p className="paragraph-text">{p2}</p>
		<p className="paragraph-text">After graduating from <b className="bold-text">Ozyegin University</b> in June 2020, 
		I joined the support team at <b className="bold-text">P.I. Works</b> where I work on ETL management and solving wide variety of customer cases on a daily basis.</p>
		<p className="paragraph-text">{p4}</p>
	</>
	)
}

function renderSkillset() {
	return (
	<ul className="skills-list">
		{me.skillSet.map((skill, index) => 
			<li className="skill-item" key={index}> {skill}</li>
		)}
	</ul>
	)
}