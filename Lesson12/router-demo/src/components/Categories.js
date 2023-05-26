import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Categories() {
    const activeClass=({isActive})=>{
        return isActive?'group-item selected':'group-item';
    }
    const activeStyle=({isActive})=>{
        return{
            backgroundColor:isActive?'yellow':'blue',
            color:isActive?'blue':'red'
        }
    }
  return (
    <div>
      <h2>Danh mục: Categories</h2>
      <ul>
        <li>
            <NavLink className={activeClass} style={activeStyle} 
                to={'program'}>Khóa học lập trình</NavLink>
        </li>
        <li>
            <NavLink className={activeClass} style={activeStyle} 
                to={'kid'}>Khóa học lập trình cho trẻ em - kid</NavLink>
        </li>
        <li>
            <NavLink className={activeClass} style={activeStyle} 
                to={'network'}>Khóa học quản trị mạng - network</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default Categories
