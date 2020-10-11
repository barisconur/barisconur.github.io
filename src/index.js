import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter as Router} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/HomePage.js'; 
import BlogPage from './pages/blog/BlogPage.js';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/blog" component={BlogPage}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));