import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types'
import { config } from 'config'

class Md extends Component {
  render () {
    const post = this.props.route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  }
}

Md.propTypes = {
  route: PropTypes.object,
}

export default Md;
