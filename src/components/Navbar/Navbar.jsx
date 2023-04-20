import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo-crop.jpg'
import profile from '../../assets/images/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate();
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
    return (
        <div className="navbar">

            <div className="logo">
                <img src={logo} alt='' />
            </div>
            <div className="navItems">
                <div className='navLeft'>
                    <div className="searchBar">
                        <input type="text" style={{ fontFamily: "Arial, FontAwesome" }} placeholder="&#xf002; Search" onChange={(e) => filterData(e.target.value)} />
                    </div>
                </div>
                <div className="navRight">
                    <i className="fa-solid fa-wallet fa-lg"></i>
                    <i className="fa-solid fa-bell fa-lg" ></i>
                    <i className="fa-solid fa-right-from-bracket fa-lg" onClick={handleLogout}></i>
                    <div className="profilePic" >
                        <img src={profile} style={{ width: "40px" }} alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
