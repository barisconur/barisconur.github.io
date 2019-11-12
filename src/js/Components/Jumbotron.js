import React, {Fragment} from 'react';
import person from '../../json/person';

export default function Jumbotron() {
    return (
        <Fragment>
            <div id="main-header">
                <h1 id="main-header-text">{person.name}</h1>
            </div>
            <hr id="header-line" className="jumbotron-line"/>
            <div id="secondary-header">
                <h2 id="secondary-header-text">{person.title}</h2>
            </div>
        </Fragment>
    );
}