import React from 'react'
import DocumentTitle from 'react-document-title'

import { link } from 'gatsby-helpers'
import typography from './utils/typography'
const { TypographyStyle } = typography
import { colors } from 'utils/colors'

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={link('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <TypographyStyle />
          {cssLink}
          <style
            dangerouslySetInnerHTML={{
              __html:
                `
                  a {
                    color: ${colors.bg};
                  }
                  .ball-0 {
                    background-image: url(${link('/docs/some-react-code/0.jpg')});
                  }
                  .ball-1 {
                    background-image: url(${link('/docs/some-react-code/1.jpg')});
                  }
                  .ball-2 {
                    background-image: url(${link('/docs/some-react-code/2.jpg')});
                  }
                  .ball-3 {
                    background-image: url(${link('/docs/some-react-code/3.jpg')});
                  }
                  .ball-4 {
                    background-image: url(${link('/docs/some-react-code/4.jpg')});
                  }
                  .ball-5 {
                    background-image: url(${link('/docs/some-react-code/5.jpg')});
                  }
                `,
            }}
          />
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={link('/bundle.js')} />
        </body>
      </html>
    )
  },
})
