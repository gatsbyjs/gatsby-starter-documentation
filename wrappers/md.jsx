import React from 'react'
import Helmet from "react-helmet"
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.siteTitle}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  },
})
