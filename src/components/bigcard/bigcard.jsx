import React from 'react'
import img1 from '../../assets/images/travel-img.jpg'
import "./bigcard.css"

const Bigcard = () => {
  return (
    <div className="maindiv">
      <div className="card1">
        <p className="bigcardname">Red Fort</p>
        <img src={img1} className="bigcardimage"></img>
        <p className='monumenthistory'>
          Sustainable development is a popular and important concept, but one
          that is open to a variety of interpretations. Since the 1987
          Brundtland report (World Commission on Environment and Development,
          1987), many researchers in universities, environmental organizations,
          think-tanks, national governments and international agencies have
          offered proposals for measuring sustainable development. The wide
          variety of indicators in existing national and international
          policy-based sets testifies to the difficulty of the challenge.{" "}
        </p>
        <p className="price">RS.200</p>
        <button className="bookbutton">Book now</button>
      </div>
    </div>
  );
}

export default Bigcard
