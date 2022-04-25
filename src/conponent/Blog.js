import React, { Component } from 'react'
import BlogItem from './BlogItem';

export default class Blog extends Component {
  clickButton() 
    {

      console.log('button is work');
    }
  render() {
    const appClick = () => {console.log('Shown from Blog Comp...... ')}
    return (
      <div>
        <h2>Where are you frolm ?</h2>
        <button onClick={this.clickButton}>ADD</button>
        {/* <BlogItem appClick{appClick} /> */}
        <BlogItem/>
        
      </div>
    )
  }
}
