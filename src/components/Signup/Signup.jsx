import React, { useState } from 'react'
import './Signup.css'
import signupImg from '../../assets/images/travel-img.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const [image, setImage] = useState('');
  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0])
  }
  // function handleApi(){
  //     const formData = new FormData()
  //     formData.append('file',image)
  //     fetch(
  //         'http://192.168.118.115:5000/signup',{
  //             method:'POST',
  //             body:formData
  //         }
  //     ) .then((response) => response.json().then((result) => {console.log('Success:', result);}).catch((error) => {console.error('Error:', error);}))
  // } 
  const navigate = useNavigate();
  const [btnDisable, setBtnDisable] = useState(false)
  const [creds, setCreds] = useState({ name: "", age: "", phone: "", image: "" })
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }
  const handlesubmit = (e) => {
    console.log("handlesubmit")
    e.preventDefault();
    setBtnDisable(true);
    let data = new FormData();
    data.append("name", creds.name);
    data.append("age", creds.age);
    data.append("phone", creds.phone);
    data.append("file", image);

    console.log(data);
    axios
      .post("http://192.168.118.115:5000/signup", data, { "Content-Type": "multipart/form-data" })
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
    <div className="signup">
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
            <input type="file" name="file" id="file" required placeholder="upload your picture" onChange={handleImage} />
            <button className="signupbtn" onClick={handlesubmit}>Register</button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
