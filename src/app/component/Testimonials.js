// src/components/Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonials } from '../utils/utils';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Typography, Card, CardContent, Avatar, Rating, IconButton } from '@mui/material';
import "../style/treatment.css"


SwiperCore.use([Navigation, Pagination]);



const Testimonials = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#F9F6F1' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Client's Testimonials
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#F3EDE8', borderRadius: '16px' }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{ width: 100, height: 100, borderRadius: '16px', marginRight: 2 }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {testimonial.text}
                </Typography>
                <Rating value={testimonial.rating} readOnly />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-prev">
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div className="swiper-button-next">
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </div> */}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
