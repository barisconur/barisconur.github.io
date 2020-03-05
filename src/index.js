import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './js/HomePage';
import BlogPage from './js/BlogPage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/blog" component={BlogPage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('home-page'));
