
import React from 'react'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {registerPropertyRoute} from '../requests/apiRoutes';


function PropertyUpload() {

  const navigate = useNavigate();
  
  //alert structure
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"light"
  };

  //vaues to be submitted
  const oid = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));;
  
  const [values, setValues] = useState({
    titleoff: "",
    typeoff: "",
    description:"",
    owner: "",
    address: "",
    rent: "",
    security: "",
    ownerid: oid._id,
  });

  useEffect(() => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    }
    // setOid(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
    
  }, []);

  const handleChange=(event)=>{
      setValues({...values, [event.target.name]: event.target.value});
    };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    // console.log(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      if (Validation()){
      const { titleoff,typeoff,description,owner,address,rent,security,ownerid } = values;
      const {data} = await axios.post(registerPropertyRoute,{
        titleoff,typeoff,description,owner,address,rent,security,ownerid
      });

      if(data.status===false){
        toast.error(data.msg, toastOptions);
      }
      if(data.status===true){
        
          navigate('/property');
      }
      }
    };

    //input validation
    const Validation = ()=>{
      const {titleoff,typeoff,description,owner,address,rent,security}= values;
      if(titleoff.length < 5){
        toast.error(
          "Title should be greater than 4 characters.",
          toastOptions
        );
        return false;
      }
      else if (typeoff === "") {
        toast.error("Type of Property is required.", toastOptions);
        return false;
      }
      else if(description.length < 15){
        toast.error(
          "Description should be 10 characters.",
          toastOptions
        );
        return false;
      } else if(owner.length < 5){
        toast.error(
          "Owner name should be equal or greater than 5 characters.",
          toastOptions
        );
        return false;
      } 
       else if(address.length < 10){
        toast.error(
          "Address should be equal or greater than 10 characters.",
          toastOptions
        );
        return false;
      } else if(rent.length === 0){
        toast.error(
          "Rent is required",
          toastOptions
        );
        return false;
      }  else if(security.length ===0){
        toast.error(
          "Security is required",
          toastOptions
        );
        return false;
      } 
      return true;
    }

  return (
    <>
          <Navbar/>
        <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>Register New Property Here</h1>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="titleoff"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="text"
            placeholder="Type of Property"
            name="typeoff"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="text"
            placeholder="Owner Name"
            name="owner"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Rent"
            name="rent"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Security Deposit"
            name="security"
            onChange={(e) => handleChange(e)}
          />
          
            <button type="submit">Register </button>
        </form>
        <ToastContainer/>
      </FormContainer>
    </>
  )
}

export default PropertyUpload;

const FormContainer = styled.div`
height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: -webkit-gradient(linear, left bottom, left top, from(#fbc2eb), to(#a18cd1));
  .brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #4e0eff;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: #4e0eff;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;