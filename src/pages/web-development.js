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
        {staticdata.cells.map(cell => (
          <div>
            <a href="https://hw02.netlify.com/">{cell.title}</a>
          </div>
        ))}
        <Hamburger />
      </Layout>
    )
  }
}

export default Web
