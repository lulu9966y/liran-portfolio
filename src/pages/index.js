import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`liran`, `yin`, `portfolio`]} />
        <Header />
        <main className="introduction">
          <main className="intro-container">
            <h1>Hi, I'm Liran. I'm a web designer & developer.</h1>
            <p>
              Currently, I'm studying Human-Computer Interaction at Rochester
              Institute of Technology. My passion is to design and code{' '}
              <div className="band-container">
                <div className="band">
                  <Link>web applications</Link>
                </div>
              </div>
              &nbsp;with good usability and accessibility. If you want to know
              more{' '}
              <div className="band-container">
                <div className="band">
                  <Link>about me</Link>
                </div>
              </div>
              , feel free to contact me on{' '}
              <div className="band-container">
                <div className="band">
                  <a href="mailto: liran.yin@gmail.com" target="_blank">
                    liran.yin@gmail.com
                  </a>
                </div>
              </div>
              .
            </p>
          </main>
        </main>
      </Layout>
    )
  }
}

export default Home
