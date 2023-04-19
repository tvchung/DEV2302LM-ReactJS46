import React, { Component } from 'react'
// Sử dụng sự kiện với state
export default class EventDemo4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"Chung Chuung",
            age:45
        }
    }
    // sự kiện làm thay đổi state
    handleChange = () =>{
        this.setState({
            name:"Devmaster Academy",
            age:6
        })
    }
  render() {
    return (
      <div>
        <h2>Function với state</h2>
        <div style={{margin:"1rem 25%", backgroundColor:"green"}}>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
        </div>
        <button onClick={this.handleChange}>Change State</button>
        <input value={this.state.name} 
            onChange={(event)=>this.setState({name:event.target.value})} />
      </div>
    )
  }
}
