import React from 'react'
import './hamburger.css'
import { Link } from 'gatsby'
import Menu from '../components/menu'

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false,
    }
  }

  clicked = event => {
    this.setState({ menuClicked: !this.state.menuClicked })
  }

  render() {
    return (
      <div className="Hamburger">
        <button onClick={this.clicked.bind(this)} style = {this.props.style}>
          <div className="Wrap" style = {this.props.style} />
          <div className="Three">
            <div className="First" />
            <div className="Second" />
            <div className="Third" />
          </div>
        </button>
        {this.state.menuClicked ? (
          <Menu closeMenu={this.clicked.bind(this)} />
        ) : null}
      </div>
    )
  }
}

export default Hamburger
