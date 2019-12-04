// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';
import person from '../../json/jumbotron';

export default function Jumbotron() {
    return (
        <>
            <div id="main-header">
                <h1 id="main-header-text">{person.name}</h1>
            </div>
            <hr id="header-line" className="jumbotron-line"/>
            <div id="secondary-header">
                <h2 id="secondary-header-text">{person.title}</h2>
            </div>
        </>
    );
}