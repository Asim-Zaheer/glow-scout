"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Box, Typography, Card, CardContent, CardMedia, styled,IconButton } from '@mui/material';
// import NavigateBeforeIcon from "../../../public/assets/ButtonLeft.png";
// import NavigateNextIcon from "../../../public/assets/ButtonRight.png";
import "../style/treatment.css"

SwiperCore.use([Navigation, Pagination]);

const treatments = [
  { title: 'Laser Resurfacing', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Chemical Peels', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Acne Bluelight Therapy', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Thermage', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Botox', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Botox', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Botox', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },
  { title: 'Botox', subtitle: 'Lorem Ipsum', image: '/assets/women2.png' },

];

const TreatmentCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  margin: theme.spacing(2),
  borderRadius: '16px',
  boxShadow: 'none',
}));

const TreatmentImage = styled(CardMedia)({
  height: 300,
  borderRadius: '16px 16px 0 0',
});

const TreatmentTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#4A154B',
});

const TreatmentSubtitle = styled(Typography)({
  color: '#4A154B',
});

const Treatment = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#F9F6F1',color:"#351120" }}>
      <Typography variant="h4" component="h2" align="center"  gutterBottom>
        Trending Treatments
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
      </Typography>
      <Swiper
          spaceBetween={10}
          slidesPerView={5}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {treatments.map((treatment, index) => (
            <SwiperSlide key={index}>
              <TreatmentCard>
                <TreatmentImage sx={{height:"350px" , width:"220px"}} image={treatment.image} title={treatment.title} />
                <CardContent>
                  <TreatmentTitle variant="h6">{treatment.title}</TreatmentTitle>
                  <TreatmentSubtitle variant="body2">{treatment.subtitle}</TreatmentSubtitle>
                </CardContent>
              </TreatmentCard>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-button-prev">
            <IconButton>
              <NavigateBeforeIcon />
            </IconButton>
          </div>
          <div className="swiper-button-next">
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          </div> */}
        </Swiper>
    </Box>
  );
};

export default Treatment;
