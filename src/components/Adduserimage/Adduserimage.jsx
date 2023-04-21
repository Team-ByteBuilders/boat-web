import React, { useState, useRef } from "react";
import "./Adduserimage.css";
import { useLocation, useNavigate } from "react-router";
import profile from "../../assets/images/profile.png";
import axios from "axios";

const Adduserimage = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [up, setUp] = useState(false);
  const { state } = useLocation();
  const [list, setList] = useState([]);
  const [added, setAdded] = useState(false);
  const name = JSON.parse(localStorage.getItem("user")).name;
  const checkout = (name) => {
    let data = new FormData();
    data.append("name", name);
    data.append("file", inputRef.current.files[0]);
      axios
        .post("http://192.168.177.115:5000/checkout", data, {
          "Content-Type": "multipart/form-data",
        })
        .then((response) => {
          console.log(response);
          setBtnDisable(false);
          if (response.data.success) {
            alert(response.data.message);
            localStorage.setItem("token", response.data.token);
            navigate("/home");
          } else {
            alert(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }

  const handlecheckout = () => {
    alert("checkout successfull");
    navigate("/home");
  }

  return (
    <div className="ticketPage">
      <input type="file" style={{ display: "none" }} ref={inputRef} />
      <div
        className="tickets"
        onClick={() => {
          setUp(false);
        }}
      >
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
          <button className="checkoutbutton" onClick={handlecheckout}>Checkout</button>
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
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
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
                file: inputRef.current.files[0],
              });
              checkout(a.value);
              a.value = "";
              setList([...b]);
              
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
