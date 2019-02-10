import React from 'react'
import './menu.css'
import {Link} from 'gatsby'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Menu">
      <div className = "MenuBackground" />
        <div className="MenuLine" />
        <div className="Header">
          <button onClick={this.props.closeMenu}>
            <div className="Wrap" />
            <div className="Two">
              <div className="Left" />
              <div className="Right" />
            </div>
          </button>
        </div>
        <div className="MenuBoard">
          <Link to="/646propjects/" className="MenuItem">Web Development</Link>
          <Link to="/646propjects/" className="MenuItem">UX Case Studies</Link>
          <Link to="/646propjects/" className="MenuItem">About Me</Link>
        </div>
        <div className="SocialBoard">
          <a href="https://www.instagram.com/lulunam/" className="SocialItem">INSTAGRAM</a>
          <a href="https://github.com/lulu9966y" className="SocialItem">GITHUB</a>
          <a href="https://github.com/lulu9966y" className="SocialItem">LINKEDIN</a>
          <a href="mailto:liran.yin@gmail.com" className="SocialItem">LIRAN.YIN@GMAIL.COM</a>
        </div>
      </div>
    )
  }
}

export default Menu
