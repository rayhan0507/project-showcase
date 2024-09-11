  /* eslint-disable no-unused-vars */
  import React from 'react';
  import './Hero.css';
  import { GoArrowRight } from "react-icons/go";
  import { Button, Stack,  CardActions, CardContent, CardMedia, Typography, Card, Box } from '@mui/material';
  import Insta from '../../src/assets/instagram.png';
  import { CiInstagram } from "react-icons/ci";


const Hero = () => {
    const card_01 = "Frontend developer adalah seorang pengembang yang fokus pada pembuatan dan pengembangan antarmuka pengguna (UI) "
    const card_02 = "UI (User Interface) adalah tampilan antarmuka yang digunakan pengguna untuk berinteraksi dengan perangkat lunak atau aplikasi."
    const card_03 = "Responsif adalah kemampuan desain web untuk menyesuaikan tampilan dan fungsionalitasnya agar optimal di berbagai ukuran layar dan perangkat."

    return (
      <div className='Hero-container'>
        <div className='Hero'>
          <p className='front'>Front-end&nbsp;<span className='dev'>Developer</span></p><br/>
          <p className='pemula'><span><GoArrowRight className='arrow'/> RyxaGnrl</span></p><br/>
          <p className='pengembang'><span>Web dev of<br/><span className='ui'>user interface</span></span></p>
          <Stack className='btn' spacing={2}>
            <Button variant='contained' color='secondary'sx={{marginBottom: '150px'}}>See More</Button> 
          </Stack>
        </div>
        <div className='card-socialmedia'>

        <Box>
            <Card sx={{ maxWidth: 345, 
                        backgroundColor: 'transparent', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
                        borderRadius: '10px' }} className='hero-card'>
            <CardMedia
              sx={{ height: 170 }}
              image={Insta}
              title="sosmed"
            />
            <CardContent className='hero-card-content'>
              <Typography className='RyxaGnrl'gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', fontFamily: 'nasa'}}>
                RyxaGnrl
              </Typography>
              <Typography className='hero-card-content-ryxa'variant="body2" color="text secondary" sx={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: 'bold', fontFamily: 'nasa'}}>
              Ryxa general is a boy who has a hobby in the digital world. 
              He is very enthusiastic about the development of technology and the world of programming.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='outlined' 
              href='https://www.instagram.com/ryxagnrl/' target='_blank' sx={{paddingBottom: '0px'}}>Instagram <CiInstagram className='card-icon'/></Button>
              
            </CardActions>
            </Card>
        </Box>
        </div>
        
        <div className='box-3-card'>
        <Box>
          <Card variant='plain' className='card-01'
          sx={{width: '400px', 
          background:'transparent',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px 0px 0px 10px',
          borderRight: 'solid rgba(255, 255, 255, 0.5) 0.1px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
          color: 'rgba(255, 255, 255, 0.7)',
          backgroundColor: 'rgb(255, 255, 255, 0.1)',
          marginTop: '90px',
          marginLeft: '20%',
          zIndex: '1',
          textAlign: 'center',
          position: 'relative',
          right: '100px'
          }}>
            <CardContent>
              <Typography level='title-md' sx={{fontFamily: 'nasa'}}>01 Front-End?</Typography>
              <Typography sx={{fontFamily: 'nasa', fontSize: '0.8rem', paddingTop: '15px'}}>{card_01}</Typography>
            </CardContent>
          </Card>

          <Card className='card-02' variant='plain' 
          sx={{width: '400px',
            background: 'transparent',
            backdropFilter: 'blur(10px)',
            borderRadius: '0px 0px 0px 0px',
            borderLeft: 'solid rgba(255, 255, 255, 0.5) 0.1px',
            borderRight: 'solid rgba(255, 255, 255, 0.5) 0.1px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
            color: 'rgba(255, 255, 255, 0.7)',
            backgroundColor: 'rgb(255, 255, 255, 0.1)',
            marginTop: '-136px',
            marginLeft: '785px',
            zIndex: '1',
            textAlign: 'center',
            position: 'relative',
            right: '166px'
            
          }}>
          <CardContent>
              <Typography level='title-md' sx={{fontFamily: 'nasa'}}>02 UI?</Typography>
              <Typography sx={{fontFamily: 'nasa', fontSize: '0.8rem', paddingTop: '15px'}}>{card_02}</Typography>
          </CardContent>
          </Card>

          <Card className='card-03' variant='plain'
          sx={{width: '400px',
            background: 'transparent',
            backdropFilter: 'blur(10px)',
            borderRadius: '0px 10px 10px 0px',
            borderLeft: 'solid rgba(255, 255, 255, 0.5) 0.1px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.55)',
            color: 'rgba(255, 255, 255, 0.7)',
            backgroundColor:  'rgb(255, 255, 255, 0.1)',
            marginTop: '-137px',
            marginLeft: '1187px',
            zIndex: '1',
            textAlign: 'center',
            position: 'relative',
            right: '166px'
            }}>
            <CardContent>
              <Typography level='title-md' sx ={{fontFamily: 'nasa'}}>03 Responsif?</Typography>
              <Typography sx={{fontFamily: 'nasa', fontSize: '0.8rem', paddingTop: '16px'}}>{card_03}</Typography>
            </CardContent>
          </Card>
        </Box>
        </div>
      </div>
      
    )
  }

export default Hero;