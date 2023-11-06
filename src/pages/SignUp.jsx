import React, { useState } from "react";
import {Container,Form,Button} from "react-bootstrap";
import '../styles/SignUp.css';
import { Link, useNavigate } from "react-router-dom";
// backend
import axios from "axios";
import API_URL from "../../config/global";


const SignUp = () =>{
const [formData,setFormData]=useState({
    name : "",
    email : "",
    password : ""
})

// const [successMessage,setSuccesMessage]=useState('')

const handleChange = (e)=>{
    const{name,value}=e.target
    console.log({name,value});
    setFormData({...formData, [name]:value })
   }
   console.log(formData);

// if not preventDefault , when submit click page will refresh    
const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData);
    try{
        // axios connect the front and back - axios.post(req,res)
   const response = await axios.post(`${API_URL}signin/verify`, formData)
   console.log(response);
   if(response.data.message === "User created Successfully"){
    alert("Registration Link has sent to your email")
   }else if(response.data.message === "User Already Exists"){
    alert("User Already Exists")
   }
   
//    setSuccesMessage(response.data.message)

    }catch(error){
     console.error("error during registration", error);
    }
    // setTimeout(()=>{setSuccesMessage('') },2000)
}

// const hey=()=>{
//     const age="age"
//     const a={name:"ysuusf",age:27,age:29}
//     const b={...a}
//     const c={...a,[age]:28}
//     console.log(a,"aaaaaa");
//     console.log(b,"bbbbbb");
// }

return (
    <Container>
        <h1>Registration Form</h1>
       {/* {successMessage&&<div className="msg"> {successMessage}</div>} */}
        {/* <Button onClick={()=>hey()}>Click here</Button> */}
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control   type="text" name="name" value={formData.name} onChange={handleChange} required ></Form.Control>
                {/* <Form.Control   type="text" name="name" value="newww" onChange={handleChange} required ></Form.Control> */}
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control   type="email" name="email" value={formData.email} onChange={handleChange} required ></Form.Control>
            </Form.Group>
       
            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control   type="password" name="password" value={formData.password} onChange={handleChange} required ></Form.Control>
            </Form.Group>

            <Button varient="primary" type ="submit">Register</Button>
            <p>Already have an account?<Link to="login">Login</Link></p>
        </Form>
    </Container>
)

}

export default SignUp;