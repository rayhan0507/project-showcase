/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import Review from '../components/review/Review';
import Navbar from '../components/navbar/navbar';
import './index.css';
import './App.css'



const App = () => {
  return (
    <div className='app-container'>
      <Navbar/>
      <Hero/>
      <Review/> 
      <Card/>
      <Footer/>
    </div>
  )
}

export default App;