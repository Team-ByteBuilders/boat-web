import React, { useState } from 'react'
import "./bigcard.css"
import { useLocation, useNavigate } from 'react-router'

const Bigcard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state)
  const [isReadMore, setIsReadMore] = useState(false)
  const toggleIsReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  const token=localStorage.getItem("token");
  const handlebooknow = () => {
    if(!token){
      navigate('/login')
    }
    else{
      navigate('/adduserimage')
    }
  }
  return (
    <div
      className="maindiv"
      style={{ backgroundColor: "#ccc" }}
    >
      <div className="innerCard">
        <p className="innerCardHeading">{state.name}</p>
        <img src={state.image} alt="tour" />
        <p className={`${isReadMore ? "monumenthistory" : "hidden"}`}>
        {state.details}
        </p>
        <button className='innerCardButton' onClick={toggleIsReadMore}>{isReadMore ? "Hide" : "Read More"}</button>
        <div className="bookSection">
          <p className="price">RS.200</p>
          <button className="innerCardButton2" onClick={handlebooknow}>Book now</button>
        </div>
      </div>
    </div>
  );
}

export default Bigcard
