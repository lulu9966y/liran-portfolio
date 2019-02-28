import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import staticdata from '../staticdata.json'
import Hamburger from '../components/hamburger'

class Web extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="646projects" />
        <a href="https://dreamy-ardinghelli-0fec9d.netlify.com/">
          RIT-MAPBOX GL API
        </a><br />
        <a href="https://hw02.netlify.com/">ROCHESTER-EVENT API</a>
        <a href="https://app.netlify.com/sites/quirky-ramanujan-0cf3eb/overview">FINDING-PRITZKER PROTOTYPE</a>
        <Hamburger />
      </Layout>
    )
  }
}

export default Web
