'use client'
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000', // Background color from the design
  color: '#FFFFFF', // Text color from the design
  padding: theme.spacing(6),
  borderRadius: '16px',
  marginTop: theme.spacing(8),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h4" component="div" style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}>
            Glow Scout
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink>Home</FooterLink>
          <FooterLink>Treatments</FooterLink>
          <FooterLink>Spas</FooterLink>
          <FooterLink>Blog</FooterLink>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterTitle>Privacy Policy</FooterTitle>
          <FooterLink>Terms & Conditions</FooterLink>
          <FooterLink>About Us</FooterLink>
        </Grid>
        <Grid item xs={12} md={3}>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLink>Instagram</FooterLink>
          <FooterLink>Facebook</FooterLink>
          <FooterLink>YouTube</FooterLink>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
