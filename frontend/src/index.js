import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/HomePage.js'; 
import BlogPage from './pages/blog/BlogPage.js';
import NotFoundPage from './pages/404/NotFoundPage.js';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/blog" component={BlogPage}/>
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));