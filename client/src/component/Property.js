import React, { useState, useEffect } from 'react'
import Navbar2 from './Navbar2'
import styled from 'styled-components'
import axios from 'axios';
import { getPropertyRoute } from '../requests/apiRoutes';
import {useNavigate} from 'react-router-dom'

function Property() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([])

  const currentUser = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
    
  useEffect( () => {
    const f2 = async ()=>  {
        if (currentUser) {
          const data = await axios.get("http://localhost:5000/api/property/getproperty");
          setProperties(data.data);
        } else {
          navigate("/login");
        }
      }
      f2();
  }, []);

  return (
    <>
      <Navbar2/>
      <FormContainer>
      <div className="wrapper">
	<div className="side-image">
		<div className="images-wrapper" ></div>
		<div className="side-image-content">
			<span className="kicker">03/12/21</span>
			<h1>LearningRobo</h1>
			
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam assumenda nihil suscipit obcaecati sit, cum quod corporis adipisci ipsam, fugiat, quae error. Eaque commodi, dicta quidem explicabo mollitia inventore quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam assumenda nihil suscipit obcaecati sit, cum quod corporis adipisci ipsam, fugiat, quae error. Eaque commodi, dicta quidem explicabo mollitia inventore quibusdam.</p>
			<div className="credit">Made with <span >❤</span> by <a  href="https://www.learningrobo.com/">Learning Robo</a></div>	
		</div>
	</div>
</div>

      {
        properties.map((property, index)=>{
          return(
            <div key={property._id} className="wrapper">
	<div className="side-image">
		<div className="images-wrapper" ></div>
		<div className="side-image-content">
			<span className="kicker">{property.titleoff}</span>
			<h1>{property.typeoff}</h1>
			
			<p>{property.description}</p>
			<div className="credit"> Owner -  <a  href="">{property.owner}</a></div>	
		</div>
	</div>
</div>
          )
        })
      }

      </FormContainer>
    </>
  )
}

export default Property;

const FormContainer = styled.div`
.side-image {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media (min-width: 992px) {
  .side-image {
    display: grid;
    grid-template-columns: 400px 1.3fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: ". .";
  }
}
.side-image .images-wrapper {
  display: block;
  min-height: 12em;
  padding: 3em;
  border-radius: 20px;
}
.side-image .side-image-content {
  padding: 3em 1em 2em 1em;
}
@media (min-width: 992px) {
  .side-image .side-image-content {
    padding: 4em 4em 8em 4em;
  }
}
.side-image .side-image-content .kicker {
  background: #222;
  color: white;
  font-size: 0.75em;
  margin-bottom: 1.3em;
  padding: 5px 11px;
  text-transform: uppercase;
  border-radius: 10px;
}
.credit a{
  text-decoration: none;
  color: #F4D03F;
  font-weight: 800;
  }
  
  .credit {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px;
    color:#16A085
  }

  .images-wrapper{
    background: url('https://cdn.pixabay.com/photo/2021/08/23/08/28/path-6567149__480.jpg')no-repeat right center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;
  }

  .credit span{
    color:tomato;font-size:20px;
  }

`