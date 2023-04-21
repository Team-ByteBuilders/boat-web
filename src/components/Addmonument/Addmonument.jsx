import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Addmonument.css";
import axios from "axios";

function Addmonument() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ name: "", details: "", fees: "", lat: "", long: "", image: ""});
  const [btnDisable, setBtnDisable] = useState(false);
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
   setBtnDisable(true);
    let body={
      name: creds.name,
      details: creds.details,
      fees: creds.fees,
      lat: creds.lat,
      long: creds.long,
      image: creds.image
    }
    axios.post("http://192.168.177.115:5000/addmonument", body 
    ).then((response) => {
      setBtnDisable(false);
      if (response.data.success) {
        alert(response.data.message)
      }
      else {
        alert(response.data.message);
      }
    }).catch((err) => {
      console.log(err)
    })

  }

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
            name="name"
            id="name"
            placeholder="Enter monument name"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Monument Details
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="monument details"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Entry fees
          </label>
          <input
            type="text"
            name="fees"
            id="fees"
            placeholder="Enter the entry fees"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Latitude
          </label>
          <input
            type="text"
            name="lat"
            id="lat"
            placeholder="Enter your latitude"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Longitude
          </label>
          <input
            type="text"
            name="long"
            id="long"
            placeholder="Enter your longitude"
            onChange={handleChange}
          />
          <label className="password" htmlFor="password">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter image url"
            onChange={handleChange}
          />
          <button className="signinbtn" disabled={btnDisable} onClick={handlesubmit}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addmonument;
