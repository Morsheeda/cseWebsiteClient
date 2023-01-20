import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/Topbar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import profilePicture from "../../resources/images/profile.jpg"

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [batch, setBatch] = useState("");
  const [department, setDepartment] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PP = "http://localhost:5000/images/";


  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (email === "") {setEmail(user.email)};
    // if (name === "") {setName(user.name)};

    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      email,
      password,
      name,
      batch,
      department,
      fbLink,
      twitterLink,
      linkedinLink,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <>
      <TopBar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Profile</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <div className="settingsArea">
              <div className="settingsPParea">
                <label>Your Profile Picture</label>
                <img
                  src={file ? URL.createObjectURL(file) : PP + user.profilePic}
                  alt=""
                />
                <div className="settingsPPinput">
                  <label htmlFor="fileInput">
                    <i title="Click to add a new photo to update the existing one" className="settingsPPIcon far fa-user-circle"></i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="settingsInfo">
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">User Type</label>
                  <input
                    type="text"
                    placeholder={user.roll}
                    className="settingInfoinput settingInfoinputDisabled"
                    disabled="disabled"
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Name</label>
                  <input
                    type="text"
                    required
                    placeholder={user.name}
                    className="settingInfoinput"
                    onChange={(e) => setName(e.target.value)}
                    autoFocus={true}
                  />
                </div>

                <div className="settingInfoItems">
                  <label className="settingInfoLabel"> 
                  {user.roll === "student" || user.roll === "Student" ? ( <label>Batch</label> ) : ( <label>Designation</label> )}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={user.batch}
                    className="settingInfoinput"
                    onChange={(e) => setBatch(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Department</label>
                  <input
                    type="text"
                    required
                    placeholder={user.department}
                    className="settingInfoinput"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Linkedin Link</label>
                  <input
                    type="text"
                    placeholder={user.linkedinLink}
                    className="settingInfoinput"
                    onChange={(e) => setLinkedinLink(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Faceook Link</label>
                  <input
                    type="text"
                    placeholder={user.fbLink}
                    className="settingInfoinput"
                    onChange={(e) => setFbLink(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Twitter Link</label>
                  <input
                    type="text"
                    placeholder={user.twitterLink}
                    className="settingInfoinput"
                    onChange={(e) => setTwitterLink(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Email</label>
                  <input
                    type="email"
                    required
                    placeholder={user.email}
                    className="settingInfoinput"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="settingInfoItems">
                  <label className="settingInfoLabel">Password</label>
                  <input
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="settingInfoinput"
                  />
                </div>
              </div>
            </div>
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{ color: "green", textAlign: "center", marginTop: "20px" }}
              >
                Profile has been updated...
              </span>
            )}
          </form>
        </div>
        {/* <Sidebar /> */}
        <div className="sidebarInSettings">
          <div className="insideOfSidebarInSettings">
            <div className="settingsSidebar ">
              <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT YOU</span>
                <img
                  src={user.profilePic === "" ? profilePicture : PP + user.profilePic}
                  alt=""
                />

                {
                  <div className="sidebarUserInfo">
                    <p className="sidebarUserName">{user.name}</p>
                    <p>User Name: {user.username}</p>
                    {user.roll === "" ? (<p></p>) : (<p>{user.roll}</p>)}
                    {user.batch === "" ? (<p></p>) : ( user.roll === "student" || user.roll === "Student" ? (<p>{user.batch}<sup>th</sup> batch of</p>) : (<p>{user.batch} of</p>)  )}
                    {user.department === "" ? (<p></p>) : (<p>{user.department} Department</p>)}
                    <p><a href="mailto:{user.email}" >{user.email}</a></p>
                    {user.linkedinLink === "" ? (<p></p>) : (<p className="socialLinkInSettings"><a href={user.linkedinLink} rel="noreferrer" target="_blank">{user.linkedinLink}</a></p>)}
                    {user.fbLink === "" ? (<p></p>) : (<p className="socialLinkInSettings"><a href={user.fbLink} rel="noreferrer" target="_blank">{user.fbLink}</a></p>)}
                    {user.twitterLink === "" ? (<p></p>) : (<p className="socialLinkInSettings"><a href={user.twitterLink} rel="noreferrer" target="_blank">{user.twitterLink}</a></p>)}
                  </div>}
              </div>
              <span className="settingsDelete">Delete Account</span>
            </div>


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
          {/* <div className="sidebarItem">
              <span className="sidebarTitle">FOLLOW AUTHOR</span>
              <div className="sidebarSocial">
                <a className="link" href="https://www.facebook.com/istbd.edu" rel="noreferrer" target="_blank">
                  <i className="sidebarIcon fab fa-facebook-square"></i>
                </a>
                <a className="link" href="https://www.youtube.com/channel/UC7UzEN4TUZ_pRexLbS4f67g" rel="noreferrer" target="_blank">
                  <i className="sidebarIcon fab fa-twitter-square"></i>
                </a>
                <a className="link" href="https://www.linkedin.com/in/institute-of-science-and-technology-ist/" rel="noreferrer" target="_blank">
                  <i className="sidebarIcon fab fa-brands fa-linkedin"></i>
                </a>
              
          </div>

        </div> */}
        </div>
      </div>
    </>
  );
}