// eslint-disable-next-line no-unused-vars
import React,{Fragment} from "react";
import json from "../../json/courses"

import "../../sass/HomePage.scss";

export default function Courses() {
	return (
			<>
				<div className="title-panel">
					<h2 className="title-text">Taken Courses</h2>
					<hr className="jumbotron-line"/>
				</div>

				<div className="container">
					<table className="table table-striped table-dark">
						<thead>
						<tr>
							<th scope="col">Course Code</th>
							<th scope="col">Course Name</th>
							<th scope="col">Term</th>
						</tr>
						</thead>
						<tbody>{displayCourses()}</tbody>
					</table>
				</div>
			</>
	);
}

function displayCourses() {
	return <>
		{json.courses.map((course, index) => (
			<tr key={index}>
				<th scope="row">{course.id}</th>
				<td>{course.name}</td>
				<td>{course.semester}</td>
			</tr>
	))}
	</>
}