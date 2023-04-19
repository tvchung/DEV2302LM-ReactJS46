import React, { Component } from 'react'

// Sử dụng sự kiện có dùng props, state
export default class EventDemo3 extends Component {
    // Sự kiện có sử dụng props
    handleClick1 = ()=>{
        alert(this.props.name1);
    }
    handleClick2 = (param)=>{
        alert(param +"\n" + this.props.name2);
    }

    handleClick3 = ()=>{
        this.props.onView("Chung Trịnh Văn");
    }
  render() {
    return (
      <div>
        <h2>Sử dụng sự kiện có dùng props, state</h2>
        {/* Khai báo arrow function  */}
        <button onClick={this.handleClick1}>Button 1</button>
        {/* Gọi arrow function  */}
        <button onClick={()=>this.handleClick2("Button 2")}>Button 2</button>
        {/* gọi arrow function -> app  */}
        <button onClick={this.handleClick3}>Button 3</button>
      </div>
    )
  }
}
