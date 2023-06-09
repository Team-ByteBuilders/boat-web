import React, { useState } from 'react'
import "./ForgotPassword.css"
import { Link, useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate=useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [creds, setCreds] = useState({ email: "", password: "", newpassword: "" })
    const handleChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    // const handlesubmit = async (e) => {
    //     e.preventDefault();
    //     setBtnDisabled(true);
    //     const { email, password, newpassword } = creds;
    //     const response = await fetch("https://intern-server.azurewebsites.net/auth/resetpassword", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password,
    //             newpassword
    //         }),
    //     });
    //     const json = await response.json();
    //     setBtnDisabled(false);
    //     if (json.success) {
    //         toast.success("Password Reset Successfully");
    //         setTimeout(() => {
    //             window.location.href = "/login";
    //         }, 500);
    //     } else {
    //         toast.error(json.message);
    //     }
    // }

  return (
    
    <div className="card1">
    <div className="resetpasswordform">
        <h1>Reset Password</h1>
        <div>
            <label className='email' htmlFor="email">EMAIL</label>
            <input type="text" name="email" id="email" placeholder="Enter your email" onChange={handleChange}/>
            <label className='password' htmlFor="password">PASSWORD</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleChange}/>
            <label className='password' htmlFor="password">NEW PASSWORD</label>
            <input type="password" name="newpassword" id="newpassword" placeholder="Enter your new password" onChange={handleChange}/>
            <button className="resetbutton" disabled={btnDisabled}>Submit</button>
            <div className="backToLogin">Go back to <Link to="/login">Login</Link></div>
        </div>
    </div>
</div>
  )
}

export default ForgotPassword
