import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
    };
  }
  render() {
    let elementStudent = this.state.students.map((student, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{student.studentId}</td>
          <td>{student.studentName}</td>
          <td>{student.age}</td>
          <td>{student.sex}</td>
          <td>{student.birthDate}</td>
          <td>{student.birthPlace}</td>
          <td>{student.address}</td>
        </tr>
      );
    });
    return (
      <>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Age</th>
              <th scope="col">Sex</th>
              <th scope="col">birthDate</th>
              <th scope="col">birthPlace</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>{elementStudent}</tbody>
        </table>
      </>
    );
  }
}
