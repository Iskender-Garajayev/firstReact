import React, { Component } from 'react'

export default class BlogItem extends Component {
  render() {
    return (
      <div>
        <h3> name is </h3>
        <h4>{this.props.appClick}</h4>
      </div>
    )
  }
}
