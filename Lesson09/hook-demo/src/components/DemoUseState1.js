import React, { useState } from 'react'

export default function DemoUseState1() {
    // mockData:
    const  students = [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ];
    const [lists, setLists] = useState(students);

      const elementStudent = lists.map((item,index)=>{
        return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.studentId}</td>
                    <td>{item.studentName}</td>
                    <td>{item.age}</td>
                    <td>{item.sex?"Nam":"Nữ"}</td>
                </tr>
        )
      })
  return (
    <div>
      <h2>List Student</h2>
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {elementStudent}
        </tbody>
    </table>
    </div>
  )
}
