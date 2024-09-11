/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { Button, Stack,  CardActions, CardContent, CardMedia, Typography, Card, Box } from '@mui/material';
import Editor from '../../src/assets/editor.jpeg';
import Programming from '../../src/assets/programming.jpg'
import Pr from '../../src/assets/pr.png';
import Davinci from '../../src/assets/davinci.png';
import Python from '../../src/assets/py.png';
import Javascript from '../../src/assets/javascript.png';
import Html from '../../src/assets/html.png';
import Css from '../../src/assets/css.png';
import Vscode from '../../src/assets/vscode.png';
import Git from '../../src/assets/git.png';
import Github from '../../src/assets/github.png';
import Typescript from '../../src/assets/typescript.png';
import Reactjs from '../../src/assets/reactjs.png';
import Tailwind from '../../src/assets/tailwind.png';
import Model from '../../src/assets/3d.jpg';
import Blender from '../../src/assets/blender.png';
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer-container'>
      <Stack className='Footer-page'>
        
          <Stack sx={{width: '300px', position: 'relative', right: '640px', top: '240px'}}>
            <Typography variant='h4' sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>
              Apa yang saya <Typography component='span' variant='h4' color='secondary' sx={{fontFamily: 'nasa'}}>buat?</Typography>
              </Typography>
          </Stack>

            <Box sx={{display: 'flex', flexDirection: 'row', gap: '45px', justifyContent: 'flex-end', position: 'relative', left: '300px'}}>

              <Card 
              sx={{ borderRadius: '10px', backgroundColor: '#191632 ', width: '350px',
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
              transition: 'transform 0.3s ease-in-out',
              "&:hover": {
                transform: "scale(1.05)"
              }

              }}>    
                <CardMedia sx={{height: 170 }} src={Editor} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>Video Editing</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill editing menggunakan software adobe premiere pro dan juga davinci resolve
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Pr} className='icon-card'/>
                      <img src={Davinci} className='icon-card'/>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '130px'}}>
                  <Button size='small' color='secondary' variant='contained' sx={{backgroundColor: '#8d49cc', width: '15vw', height: '4vh'}}>
                   Lihat lainya
                  </Button>
                </CardActions>

              </Card>
              <Card sx={{ borderRadius: '10px', backgroundColor: '#191632 ', width: '350px',
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
              transition: 'transform 0.3s ease-in-out',
              "&:hover": {
                transform: "scale(1.05)"
              }
              }}>    
                <CardMedia sx={{height: 170 }} src={Programming} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>Programming</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill programming web seperti html, css dan javascript begitu juga dengen librarynya
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Python} className='icon-card'/>
                      <img src={Javascript} className='icon-card'/>
                      <img src={Html} className='icon-card'/>
                      <img src={Css} className='icon-card'/>
                      <img src={Vscode} className='icon-card'/>
                      <img src={Git} className='icon-card'/>
                      <img src={Github} className='icon-card'/>
                      <img src={Typescript} className='icon-card'/>
                      <img src={Reactjs} className='icon-card'/>
                      <img src={Tailwind} className='icon-card'/>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '130px'}}>
                  <Button size='small' color='secondary' variant='contained' sx={{backgroundColor: '#8d49cc', width: '15vw', height: '4vh'}}>
                   Lihat lainya
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ borderRadius: '10px', backgroundColor: '#191632 ', width: '350px',
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: 'scale(1.05)'
              }
              }}>    
                <CardMedia sx={{height: 170 }} src={Model} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>3D Modeling</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill pembuatan 3d model dengan software blender
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Blender} className='icon-card'/>                     
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '130px'}}>
                  <Button size='small' color='secondary' variant='contained' sx={{backgroundColor: '#8d49cc', width: '15vw', height: '4vh'}}>
                   Lihat lainya
                  </Button>
                </CardActions>
              </Card>
            </Box>
        
        </Stack>
        <Stack sx={{backgroundColor: '#000000 0.1', height: '334px', maxHeight: '500px'}} className='footer-social-media'>
          <Stack className='social-media'>
            <Typography variant='h6' sx={{fontFamily: 'nasa', color: 'rgb(255, 255, 255, 0.7)'}}>Social</Typography>
            <ul className='social-media-menu'>
              <a className='instagram' href='https://www.instagram.com/ryxagnrl/' target='_blank'><CiInstagram /></a>
              <a className='facebook' href='https://www.facebook.com/rayhan.satria.923/' target='_blank'><FaFacebook /></a>
              <a className='youtube' href='https://www.youtube.com/@ryxageneral5568' target='_blank'><FaYoutube /></a>
              <a className='github' href='https://github.com/rayhan0507' target='_blank'><FaGithub /></a>
            </ul>
          </Stack>
        </Stack>
      
    </div>
  )
}

export default Footer;