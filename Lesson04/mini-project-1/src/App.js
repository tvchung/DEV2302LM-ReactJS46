import React, { Component } from "react";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ],
      isToggle:false,
      actionName:''


    }
  }
  // xử lý ẩn hiện form (Thêm/)
  handleToggle = (toggle, actionName)=>{
    this.setState({
      isToggle:toggle,
      actionName:actionName,
    })
  }
  render() {
    let {students}=this.state;
    console.log(students);
    let {actionName}=this.state;
    let elementForm = this.state.isToggle?
      <Form renderActionName= {actionName} />:"";

    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control  */}
              <Control  onToggle ={this.handleToggle} />

              {/* ListStudent Component  */}
              <ListStudent  renderStudents = {students}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
           {/* Form components */}
           {/* <Form /> */}
           {elementForm}
          </div>
        </div>
      </div>
    );
  }
}
