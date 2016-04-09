import React, { Component } from 'react'
require('./breakpoints.css')

class Breakpoint extends Component {
  render () {
    const { mobile, children } = this.props
    if (mobile) {
      return (
        <div className="breakpoint-min-width-700">
          {children}
        </div>
      )
    } else {
      return (
        <div className="breakpoint-max-width-700">
          {children}
        </div>
      )
    }
  }
}

Breakpoint.propTypes = {
  children: React.PropTypes.object,
  mobile: React.PropTypes.bool,
}

export default Breakpoint
