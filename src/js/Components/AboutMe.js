// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import "../../sass/HomePage.scss";
import about from "../../json/aboutMe";
import SocialFollow from "./SocialFollow";

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
						<img src={require('../../images/profile-photo.jpg')} className="img-fluid" alt="profile"/>
					</div>

					<div id="summary-panel" className="col-xs-12 col-md-4">
						<h4 className="category-title">{about.title}</h4>
						<p className="category-text">{about.summary}</p>
						<p className="category-text">If you need something built, you can contact me via email or ping me via twitter.</p>
						<div id="social-media-panel">
							<SocialFollow/>
							<p id="email" className="category-text">Contact: barisconur@gmail.com</p>
						</div>
					</div>

					<div id="interest-panel" className="col-xs-12 col-md-4">
						<h4 className="category-title">{about.title2}</h4>
						<p className="category-text">{about.title2Description}</p>
						<div className="interest-list">
							{ displayInterestList() }
						</div>
					</div>

				</div>
			</div>
		</>
	);
}

function displayInterestList() {
	return <>
		<ul>
			<li className="category-text">I'm <b>playing the piano</b> for a long time.</li>
			<li className="category-text">I love <b>playing chess</b> online.</li>
			<li className="category-text">I really enjoy watching conferences such as <b>Cppcon</b>, <b>TedTalks</b>, and so on.</li>
			<li className="category-text">And I helping somebody around me by sharing and talking on my previous experiences to motivate him or her. </li>
		</ul>
	</>
}