import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hamburger from '../components/hamburger'
import { Link } from 'gatsby'

class Web extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    let header = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '100px',
      zIndex: 1000,
      background: ' #48355b',
      boxShadow: '0px 3px 12px 0px #2c203797',
    }
    let logo = {
      // border: "1px solid green",
      left: '0',
      transform: 'translate(0, -45%)',
    }
    let img1 = require('../images/finding.jpg')
    let img2 = require('../images/ittf.jpg')
    let img3 = require('../images/gochengdu.jpg')
    let img4 = require('../images/ravenous.jpg')
    return (
      <Layout>
        <SEO title="web" />
        <div className="Content">
          <div>
            <div className="Header" style={header}>
              <Link
                className="Logo"
                style={logo}
                to="/"
                onClick={() => window.location.refresh()}
              >
                <img src={require('../images/logo.png')} height="70" />
              </Link>
              <Hamburger />
            </div>
          </div>
          <div className="ContentContainer">
            <div
              className="Piece"
              style={{ backgroundImage: 'url(' + img1 + ')' }}
            >
              <a href="https://finding-pritzker.netlify.com/" target="_blank">
                <div className="Fade">
                  <h2>FINDING PRITZKER</h2>
                  <h3>Architecture・Map・Mapbox-GL-JS・GeoJSON </h3>
                  <button>Mockup</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={{ backgroundImage: 'url(' + img2 + ')' }}>
              <a href="https://ittf.netlify.com/" target="_blank">
                <div className="Fade">
                  <h2>ITTF OFFICIAL</h2>
                  <h3>Media・Table Tennis・ReactJS・Navigation </h3>
                  <button>Mockup</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={{ backgroundImage: 'url(' + img3 + ')' }}>
              <a href="https://www.gochengdu.cn/" target="_blank">
                <div className="Fade">
                  <h2>GOCHENGDU.CN</h2>
                  <h3>Media・City Guide・Web Design Intern </h3>
                  <button>Website</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={{ backgroundImage: 'url(' + img4 + ')' }}>
              <a href="https://ravenanous.netlify.com/" target="_blank">
                <div className="Fade">
                  <h2>RAVENOUS</h2>
                  <h3>Reviewing・APIs・ReactJS・Responsive </h3>
                  <button>Mockup</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Web
