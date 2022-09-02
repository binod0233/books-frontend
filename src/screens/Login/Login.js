import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import "./Login.css";

export default function (props) {
  const navigate = useNavigate();
  
  const [userExist, setUserExist] = useState({});
  const [e, setE] = useState("");
  const [p, setP] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const login = (event) => {
    event.preventDefault();
    const validEmail = e.substring(e.length - 13) === "@copenned.com";
    if (validEmail) {
      axios.get(`http://localhost:8080/api/user/login/${e}`).then(res=>{
        setUserExist(res.data);   
              localStorage.setItem("user", JSON.stringify(res.data));
    })
      // if (userExist) {
      //     if (userExist.role === "teamlead") {
      //       navigate(`/teamlead/dashboard/${userExist?.userName}`);
      //     } else if (userExist.role === "admin") {
      //       navigate(`/admin/dashboard`);
      //     } else if (userExist.role === "clientmanager") {
      //       navigate(`/dashboard/${userExist?.userName}`);
      //     }
       
      // } else {
      //   console.log("user not found");
      // }
    } else {
      alert(" inavalid email. use @copenned.com");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {

      if (user.role === "teamlead") {
        navigate(`/teamlead/dashboard/${user.userName}`);
      } else if (user.role === "admin") {
        navigate(`/admin/dashboard`);
      } else if (user.role === "clientmanager") {
        // navigate(`/dashboard/${user.userName}`);
        console.log(user.userName)
      }
    }
  }, []);
  useEffect(() => {
    if (userExist) {
      if (userExist.role === "teamlead") {
        navigate(`/teamlead/dashboard/${userExist?.userName}`);
      } else if (userExist.role === "admin") {
        navigate(`/admin/dashboard`);
      } else if (userExist.role === "clientmanager") {
        navigate(`/dashboard/${userExist?.userName}`);


      }
    }
  }, [userExist]);
  return (
    <div className="Auth-form-container">
      <form onSubmit={login} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">BOOKS</h3>
          <p
            style={{
              textAlign: "center",
              fontFamily: "arial",
              fontWeight: "700",
              lineHeight: "28.75px",
            }}
          >
            Don't have an account ?{" "}
            <a href="/signup1" style={{ textDecoration: "none" }}>
              Sign up
            </a>
          </p>
          <div className="form-group mt-3">
            <label style={{ fontWeight: "300", fontSize: "20px" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder=""
              value={e}
              onChange={(e) => setE(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label style={{ fontWeight: "300", fontSize: "20px" }}>
              Password
            </label>
            <p className="forgot-password text-right ">
              <a
                onClick={togglePassword}
                style={{ color: "#176EB3", textDecoration: "none" }}
                href="#"
              >
                Show Password
              </a>
            </p>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control "
              placeholder=""
              value={p}
              onChange={(e) => setP(e.target.value)}
              required
            />
          </div>
          <p className="forgot-password text-right mt-2">
            <a style={{ color: "#176EB3", textDecoration: "none" }} href="#">
              Forgot password?
            </a>
          </p>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
          <label
            style={{ fontWeight: "300", fontSize: "15px" }}
            for="rememberMe"
          >
            Remember me
          </label>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn px-5"
              style={{
                fontSize: "20px",
                color: "#fff",
                background: "#17A0C4",
                fontFamily: "arial",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              Login
            </button>
          </div>
          {/* <hr></hr> */}
          {/* <button
            type="submit"
            className="btn px-5 ms-4"
            style={{ fontSize: "20px", color: "#fff", background: "#17A0C4" }}
          >
            Login
          </button> */}
        </div>
      </form>
    </div>
  );
}
