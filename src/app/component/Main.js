'use client'

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const Image = styled('img')({
  width: '100%',
  borderRadius: '8px',
});

const StyledTextField = styled(TextField)({
    backgroundColor: '#F6E9CE99',
    borderRadius: '30px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  });
  
  const BookNowButton = styled(Button)({
    backgroundColor: '#4A154B', // Set according to your design
    color: '#FFFFFF',
    borderRadius: '30px',
    height: '56px',
    padding: '0 30px',
    '&:hover': {
      backgroundColor: '#3b0d3b', 
    },
  });

const Main = () => {
  return (
    <Box sx={{backgroundColor:"white", padding: 4 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{color:"#351120",fontFamily:"Valky"}} >
          <Typography   variant="h3" component="h1" gutterBottom>
            REVEAL YOUR BEAUTY WITH
          </Typography>
          <Typography variant="h2" component="h2" gutterBottom>
            Glow Scout
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
          </Typography>
          <Button variant="contained"sx={{borderRadius:"100px",bgcolor:"#351120",marginBottom:2}}>
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="/assets/women2.png" alt="Glow Scout" />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{marginLeft:10}}>
        <Grid item xs={12} md={4} sx={{borderBlockColor:"black"}} >
          <StyledTextField select label="Select your Goals" sx={{borderColor:"black"}} fullWidth>
            <MenuItem value="goal1">Goal 1</MenuItem>
            <MenuItem value="goal2">Goal 2</MenuItem>
          </StyledTextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledTextField select label="Select your Location" fullWidth>
            <MenuItem value="location1">Location 1</MenuItem>
            <MenuItem value="location2">Location 2</MenuItem>
          </StyledTextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <BookNowButton variant="contained">
            Book Now!
          </BookNowButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;

