'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between',backgroundColor:"white" }}>
        <Typography variant="h6">
          <Link href="/" passHref>
            <Button color="inherit" sx={{ textTransform: 'none',color:"#351120",fontWeight:"400",fontSize:"42px",paddingLeft:"10px  " }}>Glow Scout</Button>
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 ,color:"#351120"}}>
          <Link href="/home" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/goals" passHref>
            <Button color="inherit">Goals</Button>
          </Link>
          <Link href="/spas" passHref>
            <Button color="inherit">Spas</Button>
          </Link>
          <Link href="/blog" passHref>
            <Button color="inherit">Blog</Button>
          </Link>
        </Box>
        <Button variant="contained" sx={{borderRadius:"100px",bgcolor:"#351120"}}>
          Sign In/Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
