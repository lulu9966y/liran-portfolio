import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="aboutme" />
        <div className="videoContainer">
          <video className="backgroundVideo" loop autoPlay width = "100%">
            <source src={require('../images/portfolio.mp4')} type="video/mp4" />
            {/* <source src={require('../images/portfolio.mp4')} type="video/ogg" /> */}
          </video>
        </div>
      </Layout>
    )
  }
}

export default AboutMe
