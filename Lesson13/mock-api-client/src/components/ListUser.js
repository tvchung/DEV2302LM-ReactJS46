import React, { useEffect, useState } from 'react'
import axiosUser from '../api/users'
import {useNavigate} from 'react-router-dom'
function ListUser() {
  const [listUsers, setListUsers] = useState([]);
  // gọi api để lấy dữ liệu về - GET
  useEffect(()=>{
    getAllUsers();
  },[])
  const getAllUsers = async()=>{
    const resp = await axiosUser.get("users");
    console.log(resp);
    console.log(resp.data);
    setListUsers(resp.data)
  }

  // edit
  const navigate = useNavigate()
  const handleEdit = (user)=>{
    // lưu dữ liệu vào localStorage
    localStorage.setItem("id",user.id)
    localStorage.setItem("username",user.username)
    localStorage.setItem("password",user.password)
    localStorage.setItem("status",user.status)
    // chuyển sang component update
    navigate("/update-user")
  }

  //xóa
  const handleDelete = async(id)=>{
    await axiosUser.delete("users/"+id);
    getAllUsers();
  }
  const elementUsers = listUsers.map((item,index)=>{
    return (
      <tr key={index}>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.status?"Kích hoạt":"Chưa kích hoạt"}</td>
        <td>
          <button onClick={()=>handleEdit(item)}>Sửa</button>
          <button onClick={()=>handleDelete(item.id)}>Xóa</button>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Danh sách người dùng (Users)</h2>
      <table border={'1px'} width={'800px'} align='center'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {elementUsers}
        </tbody>
      </table>
    </div>
  )
}

export default ListUser
