import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <>
       <Navbar/> 
       <div id="carouselExampleIndicators" className="carousel slide text-center" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active "  data-bs-interval="2000">
      <img src={require('../resources/1.jpeg')} style={{height:"600px"}} className="d-block w-100" alt="..."  />
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={require('../resources/2.jpg')} style={{height:"600px"}} className="d-block w-100" alt="..."  />
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src={require('../resources/3.jpg')} style={{height:"600px"}} className="d-block w-100" alt="..." /> 
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home