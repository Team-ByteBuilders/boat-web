import React, { useEffect, useState } from "react";
import "./Navbar.css";
import paisa from "../../assets/images/paisa.png";
import cross from "../../assets/images/cross.png";
import { Modal } from "@mantine/core";
import logo from "../../assets/images/logo-crop.jpg";
import profile from "../../assets/images/profile.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import loading from "../../assets/images/loading-gif.gif"

function Navbar() {
    const token = localStorage.getItem("token");
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [balance,setBalance]=useState();
    let data = useSelector(state => state.monumentsM
    )
    const handleLogin=()=>{
        navigate("/login")
    }
    useEffect(() => {
        axios.post("http://192.168.118.96:5000/getallmonuments").then((response) => {
            dispatch({ type: "setData", payload: response.data.data })
            dispatch({ type: "setDataM", payload: response.data.data })
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login");
    }
    const filterData = (e) => {
        let data2 = []
        data.filter((item) => {
            console.log(item)
            if (item.name.toUpperCase().includes(e.toUpperCase())) {
                data2.push(item)
            }
        })
        dispatch({ type: "setData", payload: data2 })

    }
    const handleWallet = () => {
        setModal(true)
        axios.get("http://192.168.118.96:5000/getmoney", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
          }).then((response) => {
            if (response.data.success) {
              setBalance(response.data.data.balance)
            }
            else {
              alert(json.message);
            }
          }).catch((err) => {
            console.log(err)
          })
        }
    return (
      <div className="navbar">
        <Modal
          opened={modal}
          onClose={() => setModal(false)}
          centered
          overflow="inside"
          overlayBlur="10"
          withCloseButton={false}
        >
          <img
            src={cross}
            alt="close"
            className="modalclosebutton"
            onClick={() => setModal(false)}
          />

          <div>
            <img src={paisa} className="paisa"></img>
            <p className="walletlabel">
              Current balance with the user in wallet:
            </p>
            {balance?<p className="walletamount">{balance}</p>:<img className="loadings" src={loading} alt="" />}
          </div>
        </Modal>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navItems">
          <div className="navLeft">
            <div className="searchBar">
              <input
                type="text"
                style={{ fontFamily: "Arial, FontAwesome" }}
                placeholder="&#xf002; Search"
                onChange={(e) => filterData(e.target.value)}
              />
            </div>
          </div>
          <div className="navRight">
            {token&&<i
              className="fa-solid fa-wallet fa-lg"
              onClick={handleWallet}
            ></i>}
            <i className="fa-solid fa-bell fa-lg"></i>
            {token ? (<i className="fa-solid fa-right-from-bracket fa-lg" onClick={handleLogout}></i>):(<i className="fa-solid fa-right-to-bracket fa-lg" onClick={handleLogin}></i>)}
            <div className="profilePic">
              <img src={profile} style={{ width: "40px" }} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
