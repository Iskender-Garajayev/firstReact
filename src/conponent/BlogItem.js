import React, { Component } from 'react'

export default class BlogItem extends Component {
  clickItem()
  {
    console.log('Button Clicked From blogeItem Comp');
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <button clickItem={this.clickItem}>Click To Item</button>
        <h3> name is </h3>
        <h4>{this.props.appClick}</h4>
      </div>
    )
  }
}
