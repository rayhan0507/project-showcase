/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import { Typography, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';

const Card = () => {

  return (
    <div className='Card-container'>
      <div className='about-me'>
       <Typography variant='h2' sx={{color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'nasa', textAlign: 'center', marginTop: '-370px'}}>Skills</Typography>
      </div>
      <div className='spinner'></div>
    </div>
    

  )
}

export default Card; 