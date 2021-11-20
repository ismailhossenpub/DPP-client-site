import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserMd,
  faUsersCog,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { useContext, useEffect, useState } from "react/cjs/react.development";
import { UserContext } from "../../../App";

const AdminSidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://rocky-savannah-25374.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  });

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh", left: 0 }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/MakeAppointment" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Admin Site</span>
          </Link>
        </li>

        <li>
          <Link to="/doctor/AddDoctor" className="text-white">
            <FontAwesomeIcon icon={faUserMd} /> <span>Add Doctor</span>
          </Link>
        </li>
        <li>
          <Link to="/MakeAppointment" className="text-white">
            <FontAwesomeIcon icon={faUserCog} /> <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/doctor/setting" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
