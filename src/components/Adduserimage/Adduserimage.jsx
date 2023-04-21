import React, { useState, useRef } from "react";
import "./Adduserimage.css";
import { useLocation, useNavigate } from "react-router";
import profile from "../../assets/images/profile.png";

const Adduserimage = () => {
  const inputRef = useRef(null);
  const [up, setUp] = useState(false);
  const { state } = useLocation();
  const [list, setList] = useState([]);
  const [added, setAdded] = useState(false);
  const name = JSON.parse(localStorage.getItem("user")).name;
  //   console.log(state);
  //   const [creds, setCreds] = useState({ name: "" });
  //   let [others, setOthers] = useState([]);
  //   const handleAdd = (e) => {
  //     e.preventDefault();
  //     let other = [...others, creds];
  //     setOthers(other);
  //     console.log(others);
  //   };
  //   const handlechange = (e) => {
  //     setCreds({ ...creds, [e.target.name]: e.target.value });
  //   };
  //   const data = {
  //     name: "name",
  //     profileimage: "",
  //   };
  //   const [adduser, setadduser] = useState([]);
  //   const [addmyself, setaddmyself] = useState("");
  //   const [isMeDisable, setIsMeDisable] = useState(false);
  //   const addother = () => {
  //     let a = adduser;

  //     // setadduser(a);
  //     setadduser([...a, data]);
  //   };
  //   const addme = () => {
  //     let a = localStorage.getItem("user");
  //     setaddmyself(JSON.parse(a).name);
  //     setIsMeDisable(true);
  //   };
  return (
    // <div
    //   className="maindiv"
    //   style={{
    //     backgroundColor: "#ccc",
    //     width: "100%",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <div className="onlybutton">
    //     <button className="addme" disabled={isMeDisable} onClick={addme}>
    //       Add me
    //     </button>

    //     <button className="addothers" onClick={addother}>
    //       Add others
    //     </button>
    //     {adduser.map((user, index) => {
    //       return (
    //         <div className="subdiv2">
    //           <input
    //             type="text"
    //             name="name"
    //             onChange={handlechange}
    //             placeholder="Enter Name "
    //             className="namelabel"
    //           />
    //           <input type="file" name="file" className="input" />
    //           <button className="add1" onClick={handleAdd}>
    //             Add
    //           </button>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className="ticketdetails">
    //     <h1>Ticket details</h1>
    //     <p className="ticketheader">
    //       The ticket for {state.name} is booked for the following people:
    //     </p>
    //     <label className="labeldetails">{addmyself}</label>
    //     <label className="labeldetails">
    //       {others.map((user, index) => {
    //         return <div>{user.name}</div>;
    //       })}
    //     </label>
    //   </div>
    // </div>
    <div className="ticketPage">
      <input type="file" style={{ display: "none" }} ref={inputRef} />
      <div className="tickets" onClick={() => setUp(false)}>
        <p>{state.name}</p>
        {list.map((item, index) => {
          return (
            <div className="ticket" key={index}>
              <img src={item.profile} alt="" />
              <p>{item.name}</p>
              <p>₹ {state.fees}</p>
            </div>
          );
        })}
        <div className="checkout">
          <p>TOTAL: ₹ {state.fees * list.length}</p>
          <button className="checkoutbutton">Checkout</button>
        </div>
      </div>
      <div className={`ticketAdder ${up ? "ticketUp" : ""}`}>
        <div className="topButtons">
          <button
            onClick={() => {
              let a = list;
              a.push({
                name: name,
                profile:
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              });
              setList([...a]);
              setAdded(true);
            }}
            disabled={added}
          >
            Add Self
          </button>
          <button onClick={() => setUp(true)}>Add others</button>
        </div>
        <div className="othersAdd">
          <img
            src={`${
              inputRef?.current?.files[0]
                ? inputRef.current.files[0]
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            } `}
            alt="hehe"
            onClick={() => {
              inputRef.current.click();
            }}
          />
          <input type="text" id="NAmE3546354" placeholder="Member name" />
          <button
            onClick={() => {
              setUp(false);
              let a = document.getElementById("NAmE3546354");
              let b = list;
              b.push({
                name: a.value,
                profile:
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              });
              a.value = "";
              setList([...b]);
              console.log(inputRef.current.files);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adduserimage;
