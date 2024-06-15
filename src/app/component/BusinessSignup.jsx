'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Image from 'next/image';
const BusinessSignupContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#F9F6F1', // Background color from the design
  color: '#321026', // Text color from the design
  padding: theme.spacing(8, 4),
  textAlign: 'center',
}));

const SignupButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#321026',
  borderRadius: '30px',
  padding: '10px 30px',
  marginTop: theme.spacing(4),
  fontSize:'15px',
  borderColor:"black",
  border:'black',
  '&:hover': {
    backgroundColor: '#4A154B',
    color: '#FFFFFF'
  },
}));

const BusinessSignup = () => {
  return (
    <BusinessSignupContainer>
      <Typography variant="h2" component="h2" gutterBottom>
        Are you a business?
      </Typography>
      <Typography variant="h6" paragraph>
        People are seeking for the specialist.<br />
        Join us now and serve your skills.
      </Typography>
      <SignupButton variant="contained" endIcon={<Image src="/assets/sign.png" alt="Sign Icon" width={24} height={24} />}
      >
        Sign Up as Business
        
      </SignupButton>
    </BusinessSignupContainer>
  );
};

export default BusinessSignup;
