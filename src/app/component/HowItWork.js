'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { steps } from '../utils/utils';


const StepBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#F3EDE8', 
  borderRadius: '16px',
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '300px', // Ensure the box height is at least 300px
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#4A154B', // Step number color
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#4A154B', // Text color
}));

const HowItWork= () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#FEF5E3' }}>
      <Typography variant="h4" component="h2" align="center" sx={{color :"#351120"}} gutterBottom>
        How Glow Scout Works
      </Typography>
      <Grid container spacing={2}sx={{justifyContent:"center"}} >
        {steps.map((step, index) => (
          <Grid item xs={12} md={3} key={index} >
            <StepBox sx={{backgroundColor: '#F6E9CE',color:"#351120",height:"500px"}} >
              <StepNumber >{step.number}</StepNumber>
              <StepDescription>{step.description}</StepDescription>
            </StepBox>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4A154B',
            color: '#FFFFFF',
            borderRadius: '30px',
            padding: '10px 30px',
            '&:hover': {
              backgroundColor: '#3b0d3b',
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWork;
