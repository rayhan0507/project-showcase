/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import { Box, LinearProgress, Typography } from '@mui/material'; // Memperbaiki nama LinearProgresse menjadi LinearProgress
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Card = () => {
  const progress_html = 80;
  const progress_css = 70;
  const progress_js = 45;
  
  return (
    <div className='Card-container'>
      <div className='skills'>
        <Typography 
          variant='h2' 
          sx={{
            color: 'rgba(255, 255, 255, 0.5)', 
            fontFamily: 'nasa', 
            textAlign: 'center', 
            marginTop: '-50px',
            marginBottom: '40px'
          }}
        >
          Skills
        </Typography>
      </div>

      <div className='skill'>
        <div className='skill-container'>
          <div className='column1'>

            <div className='html-bar'>
                <Typography variant="h6" gutterBottom sx={{position: 'relative', left: '150px', color: 'white', top: '50px', fontFamily: 'nasa'}}>
                  80%
                </Typography>
              <div className='spinner spin1'><AiOutlineHtml5 className='icon html-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant="determinate" value={progress_html} className='html-bar' 
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '130px', bottom: '10px'}} color='secondary'/>
              </Box>
            </div>

            <div className='css-bar'>
              <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '150px', color: 'white', top: '50px', fontFamily: 'nasa'}}>60%</Typography>
              <div className='spinner spin1'><FaCss3 className='icon css-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant='determinate' value={progress_css} className='css-bar' color='secondary' 
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '130px', bottom: '10px'}}/>
              </Box>
            </div>

            <div className="js-bar">
                <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '150px', color: 'white', top: '50px', fontFamily: 'nasa'}}>45%</Typography>
                <div className='spinner spin2'><IoLogoJavascript className='icon js-icon'/></div>
                <Box sx={{width: '100%'}}>
                  <LinearProgress variant='determinate' value={progress_js} classname='js-bar' color='secondary'
                  sx={{width: '500px', minHeight: '10px', position: 'relative', left: '130px', bottom: '10px'}}/>
                </Box>
            </div>

          </div>



          <div className='column2'>
            <div className='spinner spin3'><AiOutlinePython className='icon py-icon'/></div>
            <div className='spinner spin4'><FaReact className='icon react-icon'/></div>
            <div className='spinner spin5'><RiTailwindCssFill className='icon tailwind-icon'/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
