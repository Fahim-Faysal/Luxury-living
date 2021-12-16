import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = () => {

      const [services, setServices] = useState([])


      useEffect(() => {
            fetch('http://localhost:4000/service')
                  .then(res => res.json())
                  .then(data => setServices(data))

      }, [])


      return (
            <Container sx={{ marginTop: '50px' }}>
                  <Typography sx={{ width: '50%', fontWeight: 'bold', margin: 'auto', marginBottom: '70px' }} variant="h4" gutterBottom component="div">
                        Wr're an agency tailored to all <br />
                        client's needs that always delivers
                  </Typography>
                  <Grid container spacing={4} style={{ display: 'flex' }}>

                        {
                              services.map(service =>
                                    <Grid key={service.name} xs={12} sm={6} md={6} lg={4} sx={{
                                          justifyContent: 'center',
                                          display: 'flex',
                                          flexWrap: 'wrap',
                                          '& > :not(style)': {
                                                m: 1,
                                                width: 250,
                                                height: 350,
                                          },
                                    }}>
                                          <Paper className='service'>
                                                <img style={{ height: '100px', width: '130px' }} src={service.img} alt="" />
                                                <Typography sx={{ color: 'blueviolet' }} variant='h6' gutterBottom component="div">
                                                      {service?.name} <br />
                                                      <span style={{ color: 'red' }}>$ {service?.price}</span>
                                                </Typography>
                                                <Typography sx={{ marginBottom: '10px' }} variant='subtitle1'>
                                                      {service?.description}
                                                </Typography>
                                                <Link to='dashboard/booking'>
                                                      <Button sx={{ backgroundColor: "#00008b" }} variant='contained' >Book Now</Button>
                                                </Link>

                                          </Paper>
                                    </Grid>
                              )
                        }
                  </Grid>

            </Container>
      );
};

export default Service;