import React, { useState } from 'react'
import img1 from '../../assets/images/travel-img.jpg'
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
  const handlebooknow = () => {
    navigate('/adduserimage')
  }
  return (
    <div
      className="maindiv"
      style={{ backgroundColor: "#ccc" }}
    >
      {/* <div className="card1">
        <p className="bigcardname">Red Fort</p>
        <div className='widthHolder'>
          <img src={img1} className="bigcardimage"></img>
          <p className={`${isReadMore ? "monumenthistory" : "hidemonumenthistory"}`}>
            Sustainable development is a popular and important concept, but one
            that is open to a variety of interpretations. Since the 1987
            Brundtland report (World Commission on Environment and Development,
            1987), many researchers in universities, environmental organizations,
            think-tanks, national governments and international agencies have
            offered proposals for measuring sustainable development. The wide
            variety of indicators in existing national and international
            policy-based sets testifies to the difficulty of the challenge.{" "}
          </p>
          <button className={`${isReadMore ? "hideReadMore" : "readMore"}`} onClick={toggleIsReadMore}>Read About</button>
          <button className={`${isReadMore ? "readLess" : "hideReadLess"}`} onClick={toggleIsReadMore}>Close It</button>
          <p className="price">RS.200</p>
          <button className="bookbutton" onClick={handlebooknow}>Book now</button>
        </div>
      </div> */}
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
