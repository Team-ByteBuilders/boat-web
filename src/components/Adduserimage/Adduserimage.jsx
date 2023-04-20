import React, { useState } from "react";
import img1 from "../../assets/images/travel-img.jpg";
import "./Adduserimage.css";

const Adduserimage = () => {
  const data = {
    name: "name",
    profileimage: "",
  };
  const [adduser, setadduser] = useState([]);
  const[addmyself,setaddmyself]=useState([]);
  const[disable,setdisable]=useState(false);
  const addother = () => {
    let a = adduser;
    
    // setadduser(a);
    setadduser([...a, data]);
  };
  const addme = () => {
    setaddmyself("shreyal")
  }
  return (
    <div
      className="maindiv"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="onlybutton">
        <button className="addme" onClick={addme}>
          Add me
        </button>

        <button className="addothers" onClick={addother}>
          Add others
        </button>
        {adduser.map((user, index) => {
          return (
            <div className="subdiv2">
              <input type="text" name="name" className="namelabel"></input>
              <input type="file" name="file" className="input"></input>
              <button className="add1">Add</button>
            </div>
          );
        })}
      </div>
      <div className="ticketdetails">
        <h1>Ticket details</h1>
        <label className="labeldetails">{addmyself}</label>
      
      </div>
    </div>
  );
};

export default Adduserimage;
