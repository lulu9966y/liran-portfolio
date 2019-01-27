import React from 'react'
import './header.css'
import { Link } from 'gatsby'

const Header = (props) => (
  <div className="Header">
    <div className="LinkGroup">
      <Link to="/page-2/">LinkedIn</Link>
      <Link to="/page-2/">Resume</Link>
    </div>
    <Link className = "Logo" to="/page-2/"><img src={require("../images/logo.png")} /></Link>
    <button>
      <div className="Wrap"></div>
      <div className="Three">
        <div className="First"></div>
        <div className="Second"></div>
        <div className="Third"></div>
      </div>
    </button>
  </div>
)

export default Header
