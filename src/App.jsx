import { useState } from 'react'
import './App.css';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


// without route , routes we can return value only one 
// foe ex  Login  (or) SignUp

// const RedirectToSignup=()=>{
// return <SignUp/>
// }
function App() {
  


  return <>   
  <Routes>
    {/* <Route path='/' element={<RedirectToSignup/>}></Route> */}
    <Route path='/' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>

  </Routes> 


  {/* <SignUp /> 
  <Login />    */}
  </>

}

export default App;
