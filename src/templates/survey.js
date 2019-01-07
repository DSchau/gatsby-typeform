import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const survey = this.props.data.markdownRemark
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={survey.frontmatter.title} />
        <h1>{survey.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: survey.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query SurveyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }

    markdownRemark(fields:{slug:{eq:$slug}}) {
      frontmatter {
        title
        url
      }
      html
    }
  }
`
