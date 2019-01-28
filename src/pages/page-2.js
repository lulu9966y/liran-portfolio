import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className = "Photo">
      <img src={require("../images/photo.jpg")} width = "300"/>
      <h1>Hi, I'm Liran, I come from China.</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
