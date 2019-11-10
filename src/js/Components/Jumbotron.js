import React, {Fragment} from 'react';
import infoJson from '../../info';
function Jumbotron() {
    return (
        <Fragment>
            <div id="main-header">
                <h1 id="main-header-text">{infoJson.name}</h1>
            </div>
            <hr align="center" width="100%" className="jumbotron-line"/>
            <div id="secondary-header">
                <h2 className="secondary-header">{infoJson.title}</h2>
            </div>
        </Fragment>
    );
}

export default Jumbotron;
