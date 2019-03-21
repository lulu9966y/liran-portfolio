import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hamburger from '../components/hamburger'

class Web extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="web" />
        <a href="https://dreamy-ardinghelli-0fec9d.netlify.com/">
          RIT-MAPBOX GL API
        </a><br />
        <a href="https://hw02.netlify.com/">ROCHESTER-EVENT API</a>
        <br /><a href="https://finding-pritzker.netlify.com/">FINDING-PRITZKER PROTOTYPE</a>
        <Hamburger />
      </Layout>
    )
  }
}

export default Web
