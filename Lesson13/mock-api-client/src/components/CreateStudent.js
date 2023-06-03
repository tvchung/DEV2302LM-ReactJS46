import React, { useState } from 'react'
import axiosStudent from '../api/dbs'
import { useNavigate } from 'react-router-dom';
function CreateStudent() {
  const initStudent = {
    "id":0,
    "studentId":"",
    "studentName":"",
    "age":0,
    "avatar":""
  }
  const [student,setStudent] = useState(initStudent);
  
  const handleChange=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setStudent({
      ...student,
      [name]:value
    })
  }
  const navigate=useNavigate();
  const handleSubmit = async (event)=>{
    event.preventDefault();
    await axiosStudent.post("students",student)
     // trở lại danh sách user
     navigate("/list-student")
  }
  return (
    <div>
      <h2>Create Student</h2>
      <div>
        <label htmlFor='studentId'>Student ID </label>
        <input name='studentId' value={student.studentId} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='studentName'>Student Name </label>
        <input name='studentName' value={student.studentName} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='age'>Age </label>
        <input name='age' value={student.age} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor='avatar'>Avatar</label>
        <input name='avatar' value={student.avatar} onChange={handleChange}/>
      </div>
        <button onClick={handleSubmit}>Add new</button>
    </div>
  )
}

export default CreateStudent
