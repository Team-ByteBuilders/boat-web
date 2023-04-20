import React, { useEffect, useState } from 'react'
import './Navbar.css'
import paisa from "../../assets/images/paisa.png";
import cross from "../../assets/images/cross.png";
import { Modal } from "@mantine/core";
import logo from '../../assets/images/logo-crop.jpg'
import profile from '../../assets/images/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function Navbar() {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    let data = useSelector(state => state.monumentsM
        )
    useEffect(() => {
        axios.post("http://192.168.118.115:5000/getallmonuments").then((response) => {
            dispatch({ type: "setData", payload: response.data.data })
            dispatch({ type: "setDataM", payload: response.data.data })
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const filterData = (e) => {
        let data2 = []
        data.filter((item) => {
            console.log(item)
            if (item.name.toUpperCase().includes(e.toUpperCase())) {
                data2.push(item)
            }
        })
        dispatch({ type: "setData", payload: data2})
        
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
            <img src={paisa} className='paisa'></img>
            <p className="walletlabel">
              Current balance with the user in wallet:
            </p>
            <p className="walletamount">5000</p>
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
            <i
              className="fa-solid fa-wallet fa-lg"
              onClick={() => setModal(true)}
            ></i>
            <i class="fa-solid fa-bell fa-lg"></i>
            <div className="profilePic">
              <img src={profile} style={{ width: "40px" }} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar
