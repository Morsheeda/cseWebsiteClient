import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import TopBar from "../../components/topbar/Topbar";
import "./adminLogin.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <>
    <TopBar/>
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <span className="loginTitle">Admin Login</span>
        <label>Username</label>
        <input
          type="text"
          required
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
          autoFocus={true}
        />
        <label>Password</label>
        <input
          type="password"
          required
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link className="link" to="/register">
        <button className="loginRegisterButton">
          Register
        </button>
      </Link>
    </div>
    </>
  );
}   