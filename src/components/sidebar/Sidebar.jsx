import { Link } from "react-router-dom";
import profilePicture from "../../resources/images/profile.jpg"
import "./sidebar.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useLocation } from "react-router";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PP = "http://localhost:5000/images/"


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT AUTHOR</span>
        <img
          // src={PP+post.authorPhoto}
          src={post.authorPhoto === "" ? profilePicture : PP + post.authorPhoto}
          alt=""
        />

        {/* { user && 
          <div className="sidebarUserInfo">
          <p className="sidebarUserName">{user.name}</p>
          <p>{user.batch}<sup>th</sup> batch</p>
          <p>Department of {user.department}</p>
          <p>{user.email}</p>
        </div> } */}
        {
          <div className="sidebarUserInfo">
            <p className="sidebarUserName">{post.author}</p>
            {console.log(post.authorRoll)}
            {post.authorRoll === "" ? (<p></p>) : (<p>{post.authorRoll}</p>)}
            {post.authorBatch === "" ? (<p></p>) : (post.authorRoll === "student" || post.authorRoll === "Student" ? (<p>{post.authorBatch}<sup>th</sup> batch of</p>) : (<p>{post.authorBatch} of</p>))}
            {post.authorDepartment === "" ? (<p></p>) : (<p>{post.authorDepartment} Department</p>)}
            <p><a href="mailto:{post.authorEmail}" title="Click to send a mail directly to the author">{post.authorEmail}</a></p>
          </div>}

        {/* <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.
        </p> */}
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {cats.map((c)=> (
              <Link className="link" to={`/?cat=${c.name}`}>
              {c.name}
              </Link>
            ))}
            
          </li>
          
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW AUTHOR</span>
        <div className="sidebarSocial">
          <a className="link" href={post.authorFbLink === "" ? "https://www.facebook.com/" : post.authorFbLink} rel="noreferrer" target="_blank">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a className="link" href={post.authorTwitterLink === "" ? "https://twitter.com/" : post.authorTwitterLink} rel="noreferrer" target="_blank">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
          <a className="link" href={post.authorLinkedinLink === "" ? "https://www.linkedin.com/" : post.authorLinkedinLink} rel="noreferrer" target="_blank">
            <i className="sidebarIcon fab fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}