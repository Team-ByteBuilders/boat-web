import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import SmallCard from '../../components/SmallCard/SmallCard'
// import axios from 'axios';
import loading from "../../assets/images/loading-gif.gif"
import {  useSelector } from 'react-redux';

function Home() {
    let data = useSelector(state => state.monuments)
    return (
        <div className='home'>
            <Navbar />
            <div className="nearbyDiv">
                <h1 className='nearbyHeading'>Nearby Monument</h1>
                <div className="nearbyCards">
                    {
                        data.length === 0 && <img className='loading' src={loading} alt="" />
                    }
                    {
                        data && data.length > 0 && data.map((item, index) => {
                            return (
                                <SmallCard key={index} name={item.name} image={item.image} details={item.details} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Home
