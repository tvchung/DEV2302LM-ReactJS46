import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/list-user"}>ListUser</Link>
        </li>
        <li>
          <Link to={"/create-user"}>Create User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
