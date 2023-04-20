import React, { useState } from "react";
import "./Adduserimage.css";

const Adduserimage = () => {
  const [creds, setCreds] = useState({ name: "" })
  let [others,setOthers]=useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    let other = [...others, creds];
    setOthers(other);
    console.log(others);
  }
  const handlechange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }
  const data = {
    name: "name",
    profileimage: "",
  };
  const [adduser, setadduser] = useState([]);
  const [addmyself, setaddmyself] = useState("");
  const [isMeDisable, setIsMeDisable] = useState(false);
  const addother = () => {
    let a = adduser;

    // setadduser(a);
    setadduser([...a, data]);
  };
  const addme = () => {
    setaddmyself("shreyal")
    setIsMeDisable(true);
  }
  return (
    <div
      className="maindiv"
      style={{
        backgroundColor: "#ccc",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="onlybutton">
        <button className="addme" disabled={isMeDisable} onClick={addme}>
          Add me
        </button>

        <button className="addothers" onClick={addother}>
          Add others
        </button>
        {adduser.map((user, index) => {
          return (
            <div className="subdiv2">
              <input type="text" name="name" onChange={handlechange} placeholder="Enter Name " className="namelabel" />
              <input type="file" name="file" className="input" />
              <button className="add1" onClick={handleAdd}>Add</button>
            </div>
          );
        })}
      </div>
      <div className="ticketdetails">
        <h1>Ticket details</h1>
        <label className="labeldetails">{addmyself}</label>
        <label className="labeldetails">{others.map((user, index) => {
          return (
            <div>
              {user.name}
            </div>
          )
        }
        )}</label>
      </div>
    </div>
  );
};

export default Adduserimage;
