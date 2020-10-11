// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactSearchBox from 'react-search-box'
import Blog from './components/Blog';

//import "../sass/BlogPage.scss";

export default function BlogPage() {
  return (
    <div id="blog-page-container">

      <div className="blog-title-container">
        <h2 className="blog-title-text"> Cemal's Blog </h2>
        <hr className="title-line"/>
      </div>
      
      <div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-1">
						
					</div>

					<div id="blog-panel" className="col-xs-12 col-md-10">
            <div className="search-container">
              <ReactSearchBox
                placeholder="Search..."
              />
            </div>
            <Blog/>
            <Blog/>
            <Blog/>
            <Blog/> 
					</div>

					<div className="col-xs-12 col-md-1">
					</div>

				</div>
			</div>
    </div>
  );
}