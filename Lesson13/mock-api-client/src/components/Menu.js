import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/list-user"}>List User</Link>
        </li>
        <li>
          <Link to={"/create-user"}>Create User</Link>
        </li>
        <li>
          <Link to={"/list-student"}>List Student</Link>
        </li>
        <li>
          <Link to={"/create-student"}>Create Student</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
