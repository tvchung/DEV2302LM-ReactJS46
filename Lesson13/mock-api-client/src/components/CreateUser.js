import React, { useState } from 'react'
import axiosUser from '../api/users'
import {useNavigate} from 'react-router-dom'
function CreateUser() {

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [status,setStatus] = useState(true);
    const navigate=useNavigate();
    // xử lý khi thêm
    const createUser = async()=>{
        // giá trị trên form
        console.log(username, password, status);
        // POST => api
         await axiosUser.post('users',{username, password, status})
         // trở lại danh sách user
        navigate("/list-user")
    }
  return (
    <div>
      <h2>Thêm mới thông tin người dùng</h2>
      <div>
        username:
        <input type='text' name='username' onChange={(ev)=>setUserName(ev.target.value)}  />
      </div>
      <div>
        Password: 
        <input type='password' name='password' onChange={(ev)=>setPassword(ev.target.value)} />
      </div>
      <div>
        Status:
        <input type='radio' name='status' checked={true}  id='active' onChange={()=>setStatus(true)}/> 
        <label htmlFor='active'>Kích hoạt</label>
        <input type='radio' name='status'   id='disable' onChange={()=>setStatus(false)}/> 
        <label htmlFor='disable'>Chưa kích hoạt</label>
      </div>
      <button onClick={createUser}>Create</button>
    </div>
  )
}

export default CreateUser
