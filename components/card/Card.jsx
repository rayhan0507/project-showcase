/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import { Typography } from '@mui/material';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlinePython } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Card = () => {
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
          {/* Kontainer Kolom Kiri */}
          <div className='column1'>
            <div className='spinner spin1'><AiOutlineHtml5 className='icon html-icon'/></div>
            <div className='spinner spin1'><FaCss3 className='icon css-icon'/></div>
            <div className='spinner spin1'><IoLogoJavascript className='icon js-icon'/></div>
          </div>
          {/* Kontainer Kolom Tengah */}
          <div className='column2'>
            <div className='spinner spin1'><AiOutlinePython className='icon py-icon'/></div>
            <div className='spinner spin1'><FaReact className='icon react-icon'/></div>
            <div className='spinner spin1'><RiTailwindCssFill className='icon tailwind-icon'/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;