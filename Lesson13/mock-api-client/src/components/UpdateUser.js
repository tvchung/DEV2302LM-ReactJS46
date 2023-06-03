import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosUser from '../api/dbs'
function UpdateUser() {
  const [id, setId] = useState(0);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setUserName(localStorage.getItem("username"))
    setPassword(localStorage.getItem("password"))
    setStatus(localStorage.getItem("status"))
  },[])
  let checkActive = false;
  let checkNonActive=false;
  if(JSON.parse((status))){
    checkActive=true
  }else{
    checkNonActive=true
  }
// cập nhật trên server
const handleUpdate = async()=>{
  // put dữ liệu lên server
  await axiosUser.put("users/"+id,{id,username,password,status})

  navigate("/list-user")
}
  return (
    <div>
      <h2>Cập nhật thông tin người dùng</h2>
      <div>
        username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(ev) => setUserName(ev.target.value)}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <div>
        Status:
        <input
          type="radio"
          name="status"
          checked={checkActive}
          id="active"
          onChange={() => setStatus(true)}
        />
        <label htmlFor="active">Kích hoạt</label>
        <input
          type="radio"
          name="status"
          checked={checkNonActive}
          id="disable"
          onChange={() => setStatus(false)}
        />
        <label htmlFor="disable">Chưa kích hoạt</label>
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateUser;
