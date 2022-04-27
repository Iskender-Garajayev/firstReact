import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // BIND -1 (in constructor) this.clickButton=this.clickButton.bind(this)
  }

  // this.state={name:"Tomy"}
  state={name:"Tommy",age: 23, addres: "Gorukle"}

  // clickButton()
  // {
  //   console.log('Header js');
  //   this.props.appjsClick("Howe are you?");
  // }

  // BIND - 2 (defound errow function)
  clickButton = () => {
    console.log('Header js');
    this.props.appjsClick("Howe are you?");
    this.setState({name: "New Tommy"});
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Header Comp</h1>
        <h3>{this.state.name}</h3>
        <h2>{this.state.addres}</h2>
        <h2>{this.state.age}</h2>
        {/* BIND - 3 in JSX */}
        {/* <button onClick={this.clickButton.bind(this)}>Add</button> */}
        <button onClick={this.clickButton.bind(this)}>Add</button>
      </div>
    )
  }
}
