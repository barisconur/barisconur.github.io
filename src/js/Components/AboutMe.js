// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import SocialFollow from "./SocialFollow";
import about from "../../json/aboutMe";

import "../../sass/HomePage.scss";

export default function AboutMe() {
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

						<div id="social-media-panel">
              <p id="email" className="category-text">Email: baris.onur@ozu.edu.tr</p>
							<SocialFollow/>
						</div>
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