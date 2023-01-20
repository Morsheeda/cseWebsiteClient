import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* <a className="link" href="https://www.facebook.com/FeniUni2012" rel="noreferrer" target="_blank">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a className="link" href="https://www.youtube.com/channel/UCAvi6mQu-EKUulkZUENnffQ" rel="noreferrer" target="_blank">
          <i className="topIcon fab fa-youtube-square"></i>
        </a>
        <a className="link" href="https://www.linkedin.com/company/feni-university/" rel="noreferrer" target="_blank">
          <i className="topIcon fab fa-brands fa-linkedin"></i>
        </a> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
            <Link className="link" to="/blogs">
          <li className="topListItem">
              BLOGS
          </li>
            </Link>
            <Link className="link" to="/write">
          <li className="topListItem">
              WRITE
          </li>
            </Link>
            <Link className="link" 
            to="/settings"
            // to="/user"
            >
          <li className="topListItem">
              PROFILE
          </li>
            </Link>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            {/* <img className="topImage" src={PF+user.profilePic} alt="" /> */}
          </Link>
        ) : (
          <ul className="topList">
              <Link className="link" to="/login">
            <li className="topListItem">
                LOGIN
            </li>
              </Link>
            {/* <li className="topListItem">
              <Link className="link" to="/admin">
                ADMIN
              </Link>
            </li> */}
              <Link className="link" to="/register">
            <li className="topListItem">
                REGISTER
            </li>
              </Link>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}