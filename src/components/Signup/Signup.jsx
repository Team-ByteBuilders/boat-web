import React, { useState } from 'react'
import './Signup.css'
import signupImg from '../../assets/images/travel-img.jpg'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    const [btnDisable, setBtnDisable] = useState(false)
    const [creds, setCreds] = useState({ name: "", age: "", phone: "", image: "" })
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    const handlesubmit = (e) => {
      e.preventDefault();
      setBtnDisable(true);
      let body = {
        name: creds.name,
        age: creds.age,
        phone: creds.phone,
        image: creds.image
      };
      axios
        .post("http://192.168.118.115:5000/login", body)
        .then((response) => {
          console.log(response);
          setBtnDisable(false);
          if (response.data.success) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
    // const handleSignin = async (e) => {
    //     setBtnDisable(true);
    //     e.preventDefault();
    //     const { email, username, password, phNumber } = creds;
    //     const response = await fetch("https://intern-server.azurewebsites.net/auth/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             email,
    //             username,
    //             password,
    //             phNumber,
    //         }),
    //     });
    //     const json = await response.json();
    //     setBtnDisable(false);
    //     if (json.success) {
    //         // save the auth token and redirect
    //         localStorage.setItem("token", json.accessToken);
    //         toast.success("Signup Successful");
    //         setTimeout(() => {
    //             window.location.href = "/";
    //         }, 500);
    //     } else {
    //         // alert(json.message);
    //         toast.error(json.message);
    //     }
    // }

    return (
        <div className="card">
            
            <div className="signupForm">
                <h1>Register</h1>
                <div>
                    <label className='email' htmlFor="email">Name</label>
                    <input type="text" name="name" id="name" required placeholder="Enter your name" onChange={handleChange} />
                    <label className='username' htmlFor="username">Age</label>
                    <input type="text" name="age" id="age" required placeholder="Enter your Age" onChange={handleChange} />
                    <label className='password' htmlFor="password">Phone</label>
                    <input type="text" name="phone" id="phone" required placeholder="Enter your phone number" onChange={handleChange} />
                    <label className='phnumber' htmlFor="phnumber">Image</label>
                    <input type="file" name="file" id="file" required placeholder="upload your picture" onChange={handleChange} />
                    <button className="signupbtn" disabled={btnDisable}>Register</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup
