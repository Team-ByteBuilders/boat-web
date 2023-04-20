import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Addmonument.css";

function Addmonument() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [btnDisable, setBtnDisable] = useState(false);
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  // const handlesubmit = async (e) => {
  //     e.preventDefault();
  //     setBtnDisable(true);
  //     const { email, password } = creds;
  //     const response = await fetch("https://intern-server.azurewebsites.net/auth/login", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             email,
  //             password,
  //         }),
  //     });
  //     const json = await response.json();
  //     setBtnDisable(false);
  //     if (json.success) {
  //         // save the auth token and redirect
  //         localStorage.setItem("token", json.accessToken);
  //         // console.log(json.authtoken)
  //         toast.success("Login Successful");
  //         setTimeout(() => {
  //             window.location.href = "/";
  //         }, 500);

  //     } else {
  //         toast.error(json.message);
  //     }
  // }

  return (
    <div className="card">
      <div className="signinForm">
        <h1>Add monument</h1>
        <div>
          <label className="email" htmlFor="email">
            Name
          </label>
          <input
            type="text"
            name="text"
            id="email"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Monument History
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="monument history"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Entry fees
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Enter the entry fees"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Latitude
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Enter your latitude"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Longitude
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Enter your longitude"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Image
          </label>
          <input
            type="file"
            name="file"
            id="details"
            placeholder="upload image"
            onChange={handleChange}
          />
          <button className="signinbtn" disabled={btnDisable}>
            ADD
          </button>
          
          
        </div>
      </div>
    </div>
  );
}

export default Addmonument;
