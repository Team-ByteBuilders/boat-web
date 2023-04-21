import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ phoneno: "", otp: "" });
  const [btnDisable, setBtnDisable] = useState(false);

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setBtnDisable(true);
    let body = {
      phone: creds.phoneno,
      otp: creds.otp,
    };
    console.log(body);
    axios
      .post("http://192.168.177.115:5000/login", body)
      .then((response) => {
        console.log(response);
        setBtnDisable(false);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          console.log(response.data.data);
          alert(response.data.message);
          navigate(-1);
        }

        else if(response.data.message === "User does not exists"){
          alert(response.data.message);
          navigate("/signup");
        }
        
        else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="signinForm">
          <h1>Log In</h1>
          <div>
            <label className="email" htmlFor="email">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneno"
              id="phoneno"
              placeholder="Enter your number"
              onChange={handleChange}
            />
            <label className="email" htmlFor="email">
              OTP
            </label>
            <input
              type="text"
              name="otp"
              id="phone"
              placeholder="Enter the OTP"
              onChange={handleChange}
            />

            <button
              className="signinbtn"
              disabled={btnDisable}
              onClick={handlesubmit}
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
