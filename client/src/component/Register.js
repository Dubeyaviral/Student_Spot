import React from 'react'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {registerRoute} from '../requests/apiRoutes';


function Register() {

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
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile:"",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/property");
    }
  }, []);

  const handleChange=(event)=>{
      setValues({...values, [event.target.name]: event.target.value});
    };

  const handleSubmit = async (event)=>{
    event.preventDefault();
      if (Validation()){
      const { email, name, mobile, password } = values;
      const {data} = await axios.post(registerRoute,{
        name,email,password,mobile
      });

      if(data.status===false){
        toast.error(data.msg, toastOptions);
      }
      if(data.status===true){
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
          navigate('/property');
      }
      }
    };

    //input validation
    const Validation = ()=>{
      const {password,confirmPassword,name,mobile,email}= values;
      if(name.length < 5){
        toast.error(
          "Name should be greater than 4 characters.",
          toastOptions
        );
        return false;
      }
      else if (email === "") {
        toast.error("Email is required.", toastOptions);
        return false;
      }
      else if(mobile.length !== 10){
        toast.error(
          "Mobile should be 10 characters.",
          toastOptions
        );
        return false;
      } else if(password.length < 8){
        toast.error(
          "Password should be equal or greater than 8 characters.",
          toastOptions
        );
        return false;
      } 
      else if(password!==confirmPassword){
        toast.error(
          "Password and confirm Password should be same",
          toastOptions
        )
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
            <h1>Register Here</h1>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="text"
            placeholder="Mobile No."
            name="mobile"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          
            <button type="submit">Register Now</button>
          <span>
            Already have an account ? <Link to="/login">Login Now</Link>
          </span>
        </form>
        <ToastContainer/>
      </FormContainer>
    </>
  )
}

export default Register;

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