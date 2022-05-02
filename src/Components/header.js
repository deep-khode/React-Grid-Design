import React, { Component } from 'react'
import './style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
class Header extends Component {
  render() {
    return (
      <div id="header">
          <div className="left-header">
            <a href="#" >
                <div className="Logo">EDYODA</div>
                <p className="stories">Stories</p>
            </a>
          </div>
          <div className="right-header">
            <div style={{display: 'flex'}}>
                Explore Categories <KeyboardArrowDownIcon />
            </div>
            <div className="text-buttonDiv">
                <div className="headerText">
                    EdYoda is free learning and knowledge<br /> sharing platform for techies
                </div>
                <div>
                    <button className="headerButton">
                        Go to Main Website
                    </button>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Header