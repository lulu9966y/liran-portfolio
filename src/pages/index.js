import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`liran`, `yin`, `portfolio`]} />
        <Header />
        <div className="Dashboard">
          <h1>Hi. I’m Liran. I’m a web developer. </h1>
          <p>
            I’m currently based in Rochester enrolling in Human-Computer
            Interaction program at RIT. I’m passinate about designing and coding
            web applications with focus on not just{' '}
            <Link to="/646propjects/">what it looks like</Link>, but{' '}
            <Link to="/page-2/">how it works</Link>. If you want to know more{' '}
            <Link to="/aboutme/">about me</Link>, feel free to contact me on{' '}
            <span>liran.yin@gmail.com</span>.
          </p>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
