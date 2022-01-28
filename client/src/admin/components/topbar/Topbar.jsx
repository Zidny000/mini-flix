import { ArrowDropDown} from "@material-ui/icons";
import { useContext} from "react";
import { AuthContext } from "../../../user/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import React from "react";
import "./topbar.css";


export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <span className="logutButton" onClick={() => dispatch(logout())}>Logout</span>
          {/* <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              
             
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
