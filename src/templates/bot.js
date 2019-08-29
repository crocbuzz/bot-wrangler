import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bot = ({ pageContext }) => {
    const {  title, author, content, date } = pageContext

    const formatDate = date => {

        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }

    return (
        <Layout>
            <SEO title={title} />
            <h1>{title}</h1>
            <span className="bot-meta">Developed by <Link to={`/user/${author.slug}`}>{author.name}</Link> | { formatDate(date) }</span>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export default Bot