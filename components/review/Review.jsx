/* eslint-disable no-unused-vars */
import React from 'react';
import './Review.css';
import { Typography, Stack } from '@mui/material';
import Coder from '../../src/assets/coderedit2.jpeg';

const Review = () => {
  return (
    <div className='Review-container'>
      <div className='content-container'>
        <Stack 
          className='about-me' 
          sx={{
            fontFamily: 'nasa', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 
            display: 'flex',
            color: 'rgba(255, 255, 255, 0.5)',
            flexDirection: 'column',
            gap: '30px',
            marginLeft: '60px',
            width: '900px' 
          }}
        >
          <Typography variant='h2' sx={{ fontFamily: 'nasa' }}>About me</Typography>
          <Typography variant='subtitle1' sx={{ fontSize: '30px', fontFamily: 'nasa' }}>
            Hi nama saya{' '}
            <Typography 
              component='span' 
              sx={{ 
                backgroundColor: 'rgb(33, 33, 141)', 
                fontFamily: 'nasa', 
                fontSize: '30px', 
                padding: '5px', 
                borderRadius: '10px' 
              }}
            >
              Rayhan Satriabudi Purnomo
            </Typography>
          </Typography>
          <Typography variant='subtitle1' sx={{ fontSize: '20px', fontFamily: 'nasa' }}>
            Saya adalah seorang pengembang dan juga video editor. <br />
            Saya mampu membuat website dengan <br /> program seperti{' '}
            <Typography 
              component='span' 
              sx={{ fontFamily: 'nasa', fontSize: '20px', color: '#cc8126' }}
            >
              html
            </Typography>{' '}
            <Typography 
              component='span' 
              sx={{ fontFamily: 'nasa', fontSize: '20px', color: '#0d97a7' }}
            >
              css
            </Typography>{' '}
            dan{' '}
            <Typography 
              component='span' 
              sx={{ fontFamily: 'nasa', fontSize: '20px', color: '#b9b90a' }}
            >
              javascript
            </Typography>
            .<br />
            Begitu juga dengan library-library yang saya gunakan. <br />
            Saya mempunyai pemahaman tentang bahasa lain seperti Python.<br />
            Karna itu adalah hobby saya. <br />
            Di web ini kalian bisa melihat semua hasil project website saya disini.<br />
            Dari mulai program python, game, web, algoritma pemrograman, dan lainya!.
          </Typography>
        </Stack>
        <div className='img'>
          <img src={Coder} alt='coder' className='review-img'/>
        </div>
      </div>
    </div>
  );
}

export default Review;
