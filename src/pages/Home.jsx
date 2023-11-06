import React from "react";
import { Container,Button } from "react-bootstrap";
import '../styles/Home.css';
import { Link } from "react-router-dom";
// backend
import axios from "axios";
import API_URL from "../../config/global";
import { useEffect , useState } from "react";
// put single quote for import css


const Home = ()=>{
 const [res , setResponse] = useState({})


    // when getting the data, it will trigger the Axios
// [ ] mean , useEfeect launch the only ones, its a dependency
useEffect(()=> {
    const user = JSON. parse(localStorage.getItem("userInfo"))
    if(user && user.token){
        getData(user.token)
    }
},[])

// axios config
const getData = async (token) => {
    try{
     const config = {
        headers : {
            authorization : token
        }
     }
     
     const response = await axios.get(`${API_URL}home`, config)
     console.log(response);

     if(response.data === "invalid user"){
        alert("Login Again")
     }else if(response.data === "server busy"){
        alert("UnAuthorised access")
     }else if(response?.status){
       setResponse(response.data)
     }

    }catch(error){
        console.log(error);
    }
}



    return(
        <Container>
            <h1>  {`Hi ${res.name}`} Welcome to React WebApp </h1>
            <p> To Become a MERN Stack Developer</p>
            <Button varient="primary" type ="submit">Get Started</Button>
            {/* <Button varient="primary" type ="submit"><Link to="/">Get</Link></Button> */}
      
        </Container>
    )
}

export default Home;