// eslint-disable-next-line no-unused-vars
import React from "react";
import SocialFollow from "./SocialFollow";
import about from "../../json/aboutMe";

import "../../sass/HomePage.scss";

export default function AboutMe() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	return (
		<>
			<div className="title-panel">
				<h2 className="title-text">About Me</h2>
				<hr className="jumbotron-line"/>
			</div>

			<div className="container">
				<div className="row">
					<div id="profile-image-panel" className="col-xs-12 col-md-4">
						<img src={require('../../images/profile-photo.jpeg')} className="img-fluid" alt="profile"/>
					</div>

					<div id="summary-panel" className="col-xs-12 col-md-4">
						<h4 className="category-title">{about.title}</h4>
						<p className="category-text">{about.summary} Please feel free to contact!</p>

						<p id="email" className="category-text"> Contact: {about.email}</p>
						<div id="social-media-panel"><SocialFollow browserWidth={vw}/></div>
					</div>

					<div id="interest-panel" className="col-xs-12 col-md-4">
						<h4 className="category-title">{about.title2}</h4>
						<p className="category-text">{about.title2Description}</p>
						<div className="interest-list"> { displayInterestList() } </div>
					</div>

				</div>
			</div>
		</>
	);
}

function displayInterestList() {
	return <>
		<ul>
			<li className="category-text">I'm <b>playing chess</b> online at lichess.</li>
			<li className="category-text">I like playing <b>Hearthstone</b>, <b>CS:GO</b> and other competitive games.</li>
			<li className="category-text">I'm <b>playing the piano</b> for over 10 years.</li>
			<li className="category-text">I really enjoy watching conferences such as <b>Cppcon</b>, <b>TedTalks</b>, and so on.</li>
		</ul>
	</>
}