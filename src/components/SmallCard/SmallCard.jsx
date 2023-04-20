import React from 'react'
import './SmallCard.css'
import { useNavigate } from 'react-router'

function SmallCard(props) {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`/bigcard/${props.name}`, { state: { image: props.image, name: props.name, details: props.details } })
    }
    return (
        <div className='smallCard' onClick={handleclick}>
            <img src={props.image} alt="haha" />
            <div className="smallCardP"><p>{props.name}</p></div>
        </div>
    )
}

export default SmallCard
