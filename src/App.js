import './App.scss';
import React, { Component }  from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layouts'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='About' element={<About />}/>
        <Route path='Contact' element={<Contact />}/> 
      </Route>
    </Routes>
    </>
  );
}

export default App;
