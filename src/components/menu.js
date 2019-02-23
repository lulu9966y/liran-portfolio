import React from 'react'
import './menu.css'
import { Link } from 'gatsby'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changed: false,
      index: 0,
    }
    this.changeBackground1 = this.changeBackground1.bind(this)
    this.changeBackground2 = this.changeBackground2.bind(this)
    this.changeBackground3 = this.changeBackground3.bind(this)
    this.changeBackground4 = this.changeBackground4.bind(this)
    this.changeBackground5 = this.changeBackground5.bind(this)
    this.changeBackground6 = this.changeBackground6.bind(this)
  }

  changeBackground1() {
    this.setState({ changed: !this.state.changed, index: 1 })
  }
  changeBackground2() {
    this.setState({ changed: !this.state.changed, index: 2 })
  }
  changeBackground3() {
    this.setState({ changed: !this.state.changed, index: 3 })
  }
  changeBackground4() {
    this.setState({ changed: !this.state.changed, index: 4 })
  }
  changeBackground5() {
    this.setState({ changed: !this.state.changed, index: 5 })
  }
  changeBackground6() {
    this.setState({ changed: !this.state.changed, index: 6 })
  }

  render() {
    let button = {}
    if (this.state.changed) {
      button.background = 'transparent'
    } else {
      button.transition = '1s'
    }
    return (
      <div className="Menu">
        <div
          className={
            this.state.changed && this.state.index == '1'
              ? 'MenuBackground MenuBackgroundChanged1'
              : this.state.changed && this.state.index == '3'
              ? 'MenuBackground MenuBackgroundChanged3'
              : this.state.changed && this.state.index == '5'
              ? 'MenuBackground MenuBackgroundChanged5'
              : this.state.changed == false && this.state.index == '2'
              ? 'MenuBackground MenuBackgroundChanged2'
              : this.state.changed == false && this.state.index == '4'
              ? 'MenuBackground MenuBackgroundChanged4'
              : this.state.changed == false && this.state.index == '6'
              ? 'MenuBackground MenuBackgroundChanged6'
              : 'MenuBackground'
          }
        />
        <div className="MenuLine" />
        <div className="Header">
          <button onClick={this.props.closeMenu} style={button}>
            <div className="Wrap" style={button} />
            <div className="Two">
              <div className="Left" />
              <div className="Right" />
            </div>
          </button>
        </div>
        <div className="MenuBoard">
          <Link
            to="/"
            onClick={() => window.location.refresh()}
            className="MenuItem"
            onMouseOver={this.changeBackground5}
            onMouseOut={this.changeBackground6}
          >
            Home
          </Link>
          <Link
            to="/web-development/"
            onClick={() => window.location.refresh()}
            className="MenuItem"
            onMouseOver={this.changeBackground5}
            onMouseOut={this.changeBackground6}
          >
            Web Development
          </Link>
          <Link
            to="/web-development/"
            onClick={() => window.location.refresh()}
            className="MenuItem"
            onMouseOver={this.changeBackground3}
            onMouseOut={this.changeBackground4}
          >
            UX Case Studies
          </Link>
          <Link
            to="/aboutme/"
            onClick={() => window.location.refresh()}
            className="MenuItem"
            onMouseOver={this.changeBackground1}
            onMouseOut={this.changeBackground2}
          >
            About Me
          </Link>
        </div>
        <div className="SocialBoard">
          <a href="https://www.instagram.com/lulunam/" className="SocialItem">
            INSTAGRAM
          </a>
          <a href="https://github.com/lulu9966y" className="SocialItem">
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/liran-yin-164835144/"
            className="SocialItem"
          >
            LINKEDIN
          </a>
          <a
            href={require('../pages/liran-resume-en.pdf')}
            download
            className="SocialItem"
          >
            RESUME
          </a>
          <a href="mailto:liran.yin@gmail.com" className="SocialItem">
            LIRAN.YIN@GMAIL.COM
          </a>
        </div>
      </div>
    )
  }
}

export default Menu
