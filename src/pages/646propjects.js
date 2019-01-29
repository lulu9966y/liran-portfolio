import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import staticdata from '../staticdata.json'

const Project646 = (props) => (
    <Layout>
        <SEO title="646projects"/>
        {staticdata.cells.map(cell => (
            <div>{cell.title}</div>
        ))}
    </Layout>
)

export default Project646
