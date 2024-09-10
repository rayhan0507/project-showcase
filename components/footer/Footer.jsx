/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { Button, Stack,  CardActions, CardContent, CardMedia, Typography, Card, Box } from '@mui/material';
import Editor from '../../src/assets/editor.jpeg';
import Pr from '../../src/assets/pr.png';
import Davinci from '../../src/assets/davinci.png'

const Footer = () => {
  return (
    <div className='Footer-container'>
      <Stack className='Footer-page'>
        
          <Stack sx={{width: '300px', position: 'relative', right: '640px', top: '240px'}}>
            <Typography variant='h4' sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>
              Apa yang saya <Typography component='span' variant='h4' color='secondary' sx={{fontFamily: 'nasa'}}>buat?</Typography>
              </Typography>
          </Stack>

          <div className='card-can-do'>

            <Box sx={{display: 'flex', flexDirection: 'row', gap: '45px', justifyContent: 'flex-end', position: 'relative', left: '300px'}}>
              <Card sx={{ borderRadius: '10px', backgroundColor: '#191632 ', width: '350px',
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)'
              }}>    
                <CardMedia sx={{height: 170 }} src={Editor} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>Video Editing</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill editing menggunakan software adobe premiere pro dan juga davinci resolve
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Pr} className='pr'/>
                      <img src={Davinci} className='davinci'/>
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
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)'
              }}>    
                <CardMedia sx={{height: 170 }} src={Editor} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>Video Editing</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill editing menggunakan software adobe premiere pro dan juga davinci resolve
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Pr} className='pr'/>
                      <img src={Davinci} className='davinci'/>
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
              height: '450px',  backdropFilter: 'blur(10px)',  boxShadow: '0 25px 50px rgba(0,0,0,0.55)'
              }}>    
                <CardMedia sx={{height: 170 }} src={Editor} title='gambar-edit' alt="gambar-edit" component='img'/>
                <CardContent className='card-content-editor-card'>
                  <Stack sx={{gap: '10px', alignItems: 'flex-start', textAlign: 'left'}}>
                    <Typography variant='h6'  sx={{color: 'rgb(255, 255, 255, 0.7)', fontFamily: 'nasa'}}>Video Editing</Typography>
                    <Typography  variant='subtitle' sx={{color: 'rgb(255, 255, 255, 0.7)',fontFamily: 'nasa', fontSize: '0.9rem', alignItems: 'flex-start'}}>
                      Mempunyai pemahan tentang skill editing menggunakan software adobe premiere pro dan juga davinci resolve
                    </Typography>
                    <Stack sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
                      <img src={Pr} className='pr'/>
                      <img src={Davinci} className='davinci'/>
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

          </div>
        </Stack>
      
    </div>
  )
}

export default Footer;