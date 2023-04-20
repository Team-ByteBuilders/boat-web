import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import SmallCard from '../../components/SmallCard/SmallCard'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <div className="nearbyDiv">
                <h1 className='nearbyHeading'>Nearby Monument</h1>
                <div className="nearbyCards">
                        <SmallCard />
                        <SmallCard />
                        <SmallCard />
                        <SmallCard />
                        <SmallCard />
                </div>
            </div>

        </div>
    )
}

export default Home
