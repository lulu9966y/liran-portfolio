import React, { Component } from 'react'
import Yin from '../images/yin1.gif'
import './Loader.css'

export class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={Yin} alt="Loading..." />
      </div>
    )
  }
}

export default Loader
