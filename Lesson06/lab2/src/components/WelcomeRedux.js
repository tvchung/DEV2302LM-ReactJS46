import React, { Component } from 'react'
// Map data từ store -> views
//  sử dụng hàm connect của redux
import {connect} from 'react-redux';

class WelcomeRedux extends Component {
  render() {
    return (
      <div className='border p-3'>
        <h2>Đữ liệu được lấy ra từ store</h2>
        <h2>
            Xin chào, 
            <span className='btn btn-danger'>{this.props.userName}</span>
        </h2>
        <h3>
            Chào mừng bạn đến với khóa học ,
            <span className='btn btn-success'>{this.props.courseName}</span>
            tại Devmaster Academy
        </h3>
      </div>
    )
  }
}
// Hàm map state trong store với props của component
const mapStateToProps = (state) =>{
  return{
    userName:state.userName,
    courseName:state.courseName
  }
}
export default connect(mapStateToProps, null) (WelcomeRedux);