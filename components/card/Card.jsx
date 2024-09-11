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
  const progress_py = 75;
  const progress_react = 40;
  const progress_tailwind = 10;
  
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
                <Typography variant="h6" gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>
                  80%
                </Typography>
              <div className='spinner spin1'><AiOutlineHtml5 className='icon html-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant="determinate" value={progress_html} 
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}} color='secondary'/>
              </Box>
            </div>

            <div className='css-bar'>
              <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>60%</Typography>
              <div className='spinner spin1'><FaCss3 className='icon css-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant='determinate' value={progress_css} className='css-bar' color='secondary' 
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}}/>
              </Box>
            </div>

            <div className="js-bar">
                <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>45%</Typography>
                <div className='spinner spin1'><IoLogoJavascript className='icon js-icon'/></div>
                <Box sx={{width: '100%'}}>
                  <LinearProgress variant='determinate' value={progress_js} className='js-bar' color='secondary'
                  sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}}/>
                </Box>
            </div>

          </div>

          <div className='column2'>
            <div className='py-bar'>
              <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>75%</Typography>
              <div className='spinner spin1'><AiOutlinePython className='icon py-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant='determinate' value={progress_py} color='secondary'
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}}/>
              </Box>
            </div>
           
            <div className='react-bar'>
              <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>40%</Typography>
              <div className='spinner spin1'><FaReact className='icon react-icon'/></div>
              <Box sx={{width: '100%'}}>
                <LinearProgress variant='determinate' value={progress_react} color='secondary' 
                sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}}/>
              </Box>
            </div>
            
            <div className='tailwind-bar'>
            <Typography variant='h6' gutterBottom sx={{position: 'relative', left: '170px', color: 'white', top: '50px', fontFamily: 'nasa', width: '100px'}}>10%</Typography>
              <div className='spinner spin1'><RiTailwindCssFill className='icon tailwind-icon'/></div>
               <Box sx={{width: '100%'}}>
                 <LinearProgress variant='determinate' value={progress_tailwind} color='secondary' sx={{width: '500px', minHeight: '10px', position: 'relative', left: '170px', bottom: '10px', borderRadius: '20px'}}/>
               </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;