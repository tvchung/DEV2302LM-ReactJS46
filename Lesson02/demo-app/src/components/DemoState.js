import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng state
        this.state = {
            name:"Bùi Quang Tèo",
            age:22
        }
    }
    handleChange = ()=>{
        this.setState({
            name:"Chạch Văn Đoành",
            age:25
        })
    }
  render() {
    return (
      <div>
        <hr/>
        <h2>Sử dụng dữ liệu trong state </h2>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}
