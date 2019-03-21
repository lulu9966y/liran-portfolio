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
    let img1 = {
      backgroundImage:
        'url("https://previews.dropbox.com/p/thumb/AAV6zw32gSR8lja7auRRRUPAUwlgkOOW3ztyigF-fKwypCsk87czA1oWQPgoas4vMSL4iYgNegEu-qE6pxE5rLzaobkkpWpoAItj2QGgdXxocv9Te4CwZQdoD78uWGSGXIJhJmMtWH4FmHE6xARj4cHlTe7kzfpaO6Ra0DAGQXQdEbXtjEbqgi4EQSHe1tHVVdMsErm8Xqt2ReUceKKvn3U3vUMP5qNqiOtsFy4WaUxSZv_0NHTu4oaa-WWKy3PabqJ4puDEItzVzaHW1mz63sXj8SsdB6IBD1OOh8uUNtsdK7CgVOMTv_w6MXzgvj039Aabs_BZxoN3TDlRelscWHHt/p.jpeg?size_mode=5")',
      backgroundSize: 'cover',
    }
    let img2 = {
      backgroundImage:
        'url("https://previews.dropbox.com/p/thumb/AAXngVjdn5GjQ53k1cs5dqbfKgPW2ajjBnyhFWeOQtoMlUuIFNpQhGu29R42w1dY4XwNBVB-s4-cG2crmN39k3k409LyyOLow6C6KrARZvqcMKr8TDVGsLq0x6L3xnYhRoTX3cTMmGlHc9RLEmKayabIT4z9j7-utuEdTwlV5qnZsjzuaAL0kclq6cLb6kq7w6qDpzZ1Y8CfESjOzu2yKjRMiGHxrkKE6z1NvUil41HjeZlYdMrSyfKkYuxhDq6RZ8jA2TeGAXykLykfqPPuWMqhYgXlZGYigtBZzfZ9J8AwX5ej1NoyDmgJP6tHop4dEuXMhbJGbtcyt86htOGh1kvm/p.jpeg?size_mode=5")',
      backgroundSize: 'cover',
    }
    let img3 = {
      backgroundImage:
        'url("https://previews.dropbox.com/p/thumb/AAUm9IuRLmjpfF-5INrIe2Mb3_MVcocD2zMQkhFJCNLr1oiqsUrx2tKiADIKsEoSMEZg782LT9vdJ73yOZD8WkOaPSUVEIypm9nnSQHoXTZJA0Pg7dKbZlQ2yW9ZDolpMd2YfPF1gTWGSXanMdJ6bu6xIpwgvGlbB7qv6pT9JNGLPzHO4ogouQuuKYnVu0xX121kGDOl4x5NA6gXHpWOd6YYv8YOsTFloUrVP4PpNPQ24YidGwHUwiP8Jt6rM5DERavM8B6Urd8_1gefSxU5joLtE2yjZ9va6ZUtkSvfFKrvN6Jv9dtun5pO12xBl92tdJe-7plDJYVoapQd543lA_D7/p.jpeg?size_mode=5")',
      backgroundSize: 'cover',
    }
    let img4 = {
      backgroundImage:
        'url("https://previews.dropbox.com/p/thumb/AAVA_L3PuDh3IxrRlOC0pt_SOlnqmkS5IMNX72cwY_oTMAHnPWPQrJ2Fwn0PHDQmrOJzk66AdClVyca4ow0kjUtWPKn2N4VjW6yZw_j2-tx7WALOHKkdfCS7yj8c93irT8xUvGAouMWsITv7HV22C_zOIAunTQOu-Uh1VxNO-jgpRCK_AJrlSbKwQrDXrDJVeQo5TjLLH5YtI80InK6DaYZBCwtqxvCv8wlIaQ6HityJajvQE5zwG9iuCrXDsFG_NOK8xMZMMU_5fgz0P11l3ucCnoGV0vpU9IwFjUaNZlkboxQmkWPpxFCktlZ8cJ3aOUqle01W40Z2i6Hmqe6VIKtU/p.jpeg?size_mode=5")',
      backgroundSize: 'cover',
    }
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
              {/* <a href="https://dreamy-ardinghelli-0fec9d.netlify.com/">
          RIT-MAPBOX GL API
        </a>
        <br />
        <a href="https://hw02.netlify.com/">ROCHESTER-EVENT API</a>
        <br />
        <a href="https://finding-pritzker.netlify.com/">
          FINDING-PRITZKER PROTOTYPE
        </a> */}
              <Hamburger />
            </div>
          </div>
          <div className="ContentContainer">
            <div className="Piece" style={img1}>
              <a href="https://finding-pritzker.netlify.com/" target="_blank">
                <div className="Fade">
                  <h2>FINDING PRITZKER</h2>
                  <h3>Architecture・Map・Mapbox-GL-JS・GeoJSON </h3>
                  <button>Mockup</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={img2}>
              <a href="https://ittf.netlify.com/" target="_blank">
                <div className="Fade">
                  <h2>ITTF OFFICIAL</h2>
                  <h3>Media・Table Tennis・ReactJS・Navigation </h3>
                  <button>Mockup</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={img4}>
              <a href="https://www.gochengdu.cn/" target="_blank">
                <div className="Fade">
                  <h2>GOCHENGDU.CN</h2>
                  <h3>Media・City Guide・Web Design Intern </h3>
                  <button>Website</button>
                </div>
              </a>
            </div>
            <div className="Piece" style={img3}>
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
