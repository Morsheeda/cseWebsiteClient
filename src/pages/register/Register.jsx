import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "./../../components/topbar/Topbar";
import "./register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const newUser = await axios.post("/auth/register", {
        name,
        roll,
        username,
        email,
        password,
      });

      // if (file) {
      //   const data = new FormData();
      //   const filename = Date.now() + file.name;
      //   data.append("name", filename);
      //   data.append("file", file);
      //   newUser.profilePic = filename;
      //   console.log(newUser.profilePic);
      //   try {
      //     await axios.post("/upload", data);
      //   } catch (err) { }
      // }


      newUser.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <Topbar />
      <div className="register">
        <form className="registerForm" onSubmit={handleSubmit}>
          <span className="registerTitle">Register</span>
          
          <div className="regInputItem">
            <label>User Type</label>
            <input
              type="text"
              required
              className="registerInput"
              placeholder="Teacher or Student"
              autoFocus={true}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div className="regInputItem">
            <label>Name</label>
            <input
              type="text"
              required
              className="registerInput"
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="regInputItem">
            <label>Username</label>
            <input
              type="text"
              required
              className="registerInput"
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />

          </div>
          <div className="regInputItem">
            <label>Email Address</label>
            <input
              type="text"
              required
              className="registerInput"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="regInputItem">

            <label>Password</label>
            <input
              type="password"
              required
              className="registerInput"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className="regInputPP">

          <label >Profile Picture</label>
          <label htmlFor="fileInput"> <i title="Click to upload your profile picture" className="registerIcon fas fa-plus"></i></label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            />
          <div className="">
            {file && (
              <img className="registerPP" src={URL.createObjectURL(file)} alt="" />
            )}
          </div>
        </div> */}

          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <Link className="link" to="/login">
          <button className="registerLoginButton">
            Login
          </button>
        </Link>
        {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
      </div>
    </>
  );
}