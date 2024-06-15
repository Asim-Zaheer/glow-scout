'use client'
// src/components/About.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#321026', // Background color from the design
  color: '#FFFFFF',
  padding: theme.spacing(8, 4),
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
  },
}));

const AboutText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(4, 0),
}));

const About = () => {
  return (
    <AboutContainer>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={3}>
          <ImageContainer>
            <img src="/assets/women3.png" alt="About Glow Scout" />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutText variant="h4" component="h2">
            About <strong>"Glow Scout"</strong>
          </AboutText>
          <Typography variant="body1" paragraph align="center">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh  faucibus.           </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <ImageContainer>
            <img src="/assets/women4.png" alt="About Glow Scout" />
          </ImageContainer>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
