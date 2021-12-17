import { Grid, Typography, Button, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import banner from '../../../Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const HomeBanner = () => {
      const theme = useTheme();
      const useStyles = makeStyles({
            style: {
                  [theme.breakpoints.up('md')]: {
                        height: '430px',
                        width: '500px'
                  },
                  [theme.breakpoints.down('md')]: {
                        height: '430px',
                        width: '370px'
                  },
            },
      });
      const { style } = useStyles()
      return (
            <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} container spacing={2}>
                  <Grid item xs={12} md={4} lg={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h3" gutterBottom component="div">
                              We Build <br /> Your Dream
                        </Typography>
                        <Typography sx={{ fontWeight: 'light' }} variant="p" gutterBottom component="div">
                              Online Easte Agency, The mordern way to sell your own home. <br />
                              You can use griffin Residence to market your property
                        </Typography>
                        <br />

                  </Grid>
                  <Grid item xs={12} md={8} lg={6}>
                        <img className={style} src={banner} alt="" />
                  </Grid>
            </Grid>
      );
};

export default HomeBanner;