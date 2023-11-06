import React, { useState } from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/Login.css';
// backend
import axios from "axios";
import API_URL from "../../config/global";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData,setFormData]=useState({
      
        email : "",
        password : ""
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const{name,value}=e.target
        console.log({name,value});
        setFormData({...formData, [name]:value })
       }
       console.log(formData);
    
    // if not preventDefault , when submit click page will refresh    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);
        try{
            const response = await axios.post(`${API_URL}login/verify`, formData)
           console.log(response);

           if(response.data === "Invalid UserName or Password"){
            alert(" Invalid UserName or password")
           }else if(response.data === "Server Busy"){
            alert("Verify your email")
           }else if(response?.status){
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            navigate("/home")
           }

        }catch(e){
            console.log(e);
        }
    }

return (
    <Container>
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control   type="email" name="email" value={formData.email} onChange={handleChange} required ></Form.Control>
        </Form.Group>
   
        <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control   type="password" name="password" value={formData.password} onChange={handleChange} required ></Form.Control>
        </Form.Group>

        <Button varient="primary" type ="submit">Login</Button>
      
       
    </Form>
</Container>
)
}

export default Login;