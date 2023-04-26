import React, { Component } from "react";

export default class Student extends Component {

  // event 
  handleView = (student)=>{
    this.props.onView(true,"Close",student)
  }
  // event edit
  handleEdit = (student)=>{
    this.props.onEdit(true,"Update",student)
  }
  // event delete
  handleDelete = (student)=>{
    this.props.onDelete(student)
  }
  // handleViewEdit = (actionName,student)=>{
  //   this.props.onViewEdit(true,actionName,student);
  // }

  render() {
    // lấy dữ liệu từ props
    let {renderStudent,stt}= this.props;
    // let student = {renderStudent}
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{(renderStudent.sex==true || renderStudent.sex == "true")?'Nam':'Nữ'}</td>
          <td>
            <div className="template-demo">
              <button type="button" 
                className="btn btn-danger btn-icon-text"
                onClick={()=>this.handleView(renderStudent)}>
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
                onClick={()=>this.handleEdit(renderStudent)}>
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text"
                onClick={()=>this.handleDelete(renderStudent)}>
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
