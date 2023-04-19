import React, { Component } from 'react'
// sử dụng sự kiện có tham số

export default class EventDemo2 extends Component {
    // function 
    handleClick1 = (content)=>{
        alert(content);
    }

    handleClick2 = (param)=>{
        alert(param);
    }
  render() {
    return (
      <div>
        <h2>Sử dụng sự kiện có tham số</h2>
        {/* function được gọi khi render  */}
        {/* <button onClick={this.handleClick1("Click Button 1")}>Button 1</button> */}
        {/* function được gọi khi click - arrow function */}
        <button onClick={()=>this.handleClick2("EventDemo2 - click")}>Button 2</button>
      </div>
    )
  }
}
