import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hamburger from '../components/hamburger'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changed: false,
    }
  }
  render() {
    let button = {
      background: 'transparent',
    }
    return (
      <Layout>
        <SEO title="aboutme" />
        <div className="videoContainer">
          <video
            className="backgroundVideo"
            loop
            autoPlay
            width="100%"
            controls
          >
            <source src={require('../images/portfolio.mp4')} type="video/mp4" />
            <source src={require('../images/portfolio.mp4')} type="video/ogg" />
          </video>
        </div>
        <div className="SocialGroup1">
          <a href="https://www.instagram.com/lulunam/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <a href="https://github.com/lulu9966y">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <a href="mailto:liran.yin@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
        </div>
        <div className="container">
          <div className="leftContainer">
            <div className="name">MY NAME IS</div>
            <div className="liran">LIRAN</div>
            <div className="yin">YIN</div>
            <p>I'm a web developer.</p>
          </div>
          <div className="rightContainer">
            <div className="headshotContainer">
              <img src={require('../images/photo.jpg')} width="100" />
            </div>
            <div className="resumeContainer">
              <a href={require('../pages/liran-resume-en.pdf')}>
                <img src={require('../images/smile.png')} width="30" />
                <p>View My Resume</p>
              </a>
            </div>
          </div>
        </div>
        <Hamburger style={button} />
      </Layout>
    )
  }
}

export default AboutMe
