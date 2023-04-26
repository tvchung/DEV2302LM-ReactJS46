import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {


  // Event
  handleView = (toggle,actionName,student)=>{
    this.props.onView(toggle,actionName,student);
  }
  // Event Edit
  handleEdit = (toggle,actionName,student)=>{
    this.props.onEdit(toggle,actionName,student);
  }
  // Event Delete
  handleDelete = (student)=>{
    this.props.onDelete(student);
  }
  render() {
    let {renderStudents} = this.props;
    console.log("renderStudents",renderStudents);
    // let list = this.props.renderStudents;
    let elementStudent = renderStudents.map((student,index)=>{
      return (
        <Student key={index} renderStudent={student} stt={index+1}
            onView={this.handleView} 
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}/>
      )
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* Student component */}
                {/* <Student />
                <Student />
                <Student /> */}
                {elementStudent}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
