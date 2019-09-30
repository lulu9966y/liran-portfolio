import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Resume from './liran-resume-en.pdf'
import Loader from '../components/Loader.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`liran`, `yin`, `portfolio`]} />
        <Loader />
        <Header />
        <main className="introduction">
          <main className="intro-container">
            <p>
              <span className="Hi">
                Hi, I'm Liran. I'm a web designer & developer.
              </span>
              <br />
              <br />
              I'm currently studying Human-Computer Interaction at Rochester
              Institute of Technology. My passion is to design and code{' '}
              <div className="band-container">
                <div className="band">
                  <Link to="/web-development">web applications</Link>
                </div>
              </div>
              &nbsp;with great user experience. If you want to know more{' '}
              <div className="band-container">
                <div className="band">
                  <Link to="./aboutme">about me</Link>
                </div>
              </div>
              , check my{' '}
              <div className="band-container">
                <div className="band">
                  <a href={Resume}>resume</a>
                </div>
              </div>
              , and feel free to contact me on{' '}
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
        <ul className="title">
          <li>Liran Yin</li>
          <li>Chengdu → Rochester </li>
          <li>web development</li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/lulunam/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/lulu9966y/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto: liran.yin@gmail.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </li>
          <li>
            {' '}
            <p>Copyright&copy; 2019 LiranYin</p>
          </li>
        </ul>
        <div className="shortLine">
          <span />
        </div>
      </Layout>
    )
  }
}

export default Home
