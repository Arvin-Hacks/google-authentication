
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Nav';
import Login from './Component/Login';
import { useState } from 'react';
import Profile from './Component/Profile';

function App() {

  return (
    <div>
      {/* <h1>AUTH</h1> */}
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      
    </div>
  );
}

export default App;
