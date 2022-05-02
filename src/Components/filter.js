import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React, { Component } from 'react';
import './style.css';

class Filter extends Component {

  render() {
    return (
        <section className="filter-section">
            <h1 className="filter-title">Latest Posts</h1>
            <div className="categories-container">
               <span className="filter-text"><FilterAltIcon color="primary"/> Filter by Category</span>
                <div className="categories-list">
                    <a className="category-item" style={{background:"#0084ff", color:"#fff"}} href="#">All</a>
                    <a className="category-item" href="#">Artificial Intelligence</a>
                    <a className="category-item" href="#">Cloud Computing</a>
                    <a className="category-item" href="#">DevOps</a>
                    <a className="category-item" href="#">Programming Languages</a>
                    <a className="category-item" href="#">Mobile Appilcation Development</a>
                    <a className="category-item" href="#">Technology and Tools</a>
                    <a className="category-item" href="#">Get a Job in Tech Company</a>
                    <a className="category-item" href="#">Others</a>
                </div>
            </div>
        </section>
    )
  }
}

export default Filter