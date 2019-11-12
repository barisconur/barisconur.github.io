import React,{Fragment} from "react";
import "../home-page/HomePage.scss";
import about from "../../json/aboutMe";
import SocialFollow from "./SocialFollow";

function displayInterestList() {
    return <Fragment>
        <ul>{about.interests.map((interest, index) => (
            <li className="about-summary" key={index}>{interest}</li>
        ))}
        </ul>
     </Fragment>
}

export default function AboutMe() {
    return (
        <Fragment>
            <div className="title-panel">
                <h2 className="title-text">About Me</h2>
                <hr className="jumbotron-line"/>
            </div>

            <div className="container">
                <div className="row">
                    <div id="profile-image-panel" className="col-4">
                        <img src={"http://www.kaiwa-projects.com/assets/img/photo.jpg"} className="img-fluid"
                             alt="profil-photo"/>
                    </div>

                    <div id="summary-panel" className="col-4">
                        <h4 className="about-title">{about.title}</h4>
                        <p className="about-summary">{about.summary}</p>
                        <div id="social-media-panel"><SocialFollow/></div>
                    </div>

                    <div id="interest-panel" className="col-4">
                        <h4 className="about-title">{about.title2}</h4>
                        <p className="about-summary">{about.title2Description}</p>
                        <div className="interest-list"> { displayInterestList() }</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}