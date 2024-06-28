import React from 'react'
import './SliderCard.css';
const SliderCard = ({imgs}) => {
  return (
<div className="card boxshadow cardstyle mx-auto mb-5" style={{width: "18rem",height:'400px'}}>
  <img src={imgs} alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center ">Front End</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn main-btn d-flex mx-auto" style={{width:'142px'}}>Go somewhere</a>
  </div>
</div>
  )
}

export default SliderCard