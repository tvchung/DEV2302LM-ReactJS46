import React, { useEffect, useState } from 'react'
import axiosStudent from '../api/dbs'
function ListStudent() {
  const [listStudent, setListStudent] = useState([]);
  useEffect(()=>{
    getAllStudents();
  },[])
  const getAllStudents = async()=>{
    const resp = await axiosStudent.get("students");
    console.log(resp);
    console.log(resp.data);
    setListStudent(resp.data)
  }
  const handleEdit = (item)=>{

  }
  const handleDelete=(item)=>{

  }
  const elementStudent = listStudent.map((item,index)=>{
    return (
      <tr key={index}>
        <td>{item.studentId}</td>
        <td>{item.studentName}</td>
        <td>{item.age}</td>
        <td>
          <img src={item.avatar} alt={item.studentName} width={"50px"} />
        </td>
        <td>
          <button onClick={()=>handleEdit(item)}>Sửa</button>
          <button onClick={()=>handleDelete(item.id)}>Xóa</button>
        </td>
      </tr>
    )
  });
  return (
    <div>
      <h2>List Student</h2>
      <table border={'1px'} width={'800px'} align='center'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {elementStudent}
        </tbody>
      </table>
    </div>
  )
}

export default ListStudent
