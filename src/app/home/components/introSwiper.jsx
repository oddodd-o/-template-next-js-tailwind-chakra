import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Image } from '@chakra-ui/next-js';
import { AspectRatio, Container } from '@chakra-ui/react';

const slideData = [
  {
    id: 1,
    image: '/images/pattern/thumb/main-insight1.png',
    title: 'AI를 일상에 적용하는 법: 대학생편',
    description: '대학생들이 AI를 이용해 학습하는 방법에 대해 알아보자.',
  },
  {
    id: 2,
    image: '/images/pattern/thumb/main-insight2.png',
    title: 'AI를 일상에 적용하는 법: 대학생편',
    description: '대학생들이 AI를 이용해 학습하는 방법에 대해 알아보자.',
  },
  {
    id: 3,
    image: '/images/pattern/thumb/main-insight3.png',
    title: 'AI를 일상에 적용하는 법: 대학생편',
    description: '대학생들이 AI를 이용해 학습하는 방법에 대해 알아보자.',
  },
];

export default function IntroSwiper() {
  return (
    <Container>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper !overflow-visible"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className='flex flex-col gap-5'>
            <AspectRatio ratio={2/1}>
              <Image src={slide.image} alt={slide.title} width={1200} height={500} className='rounded-lg' />
            </AspectRatio>
            <div className='pt-5 flex flex-col gap-2'>
              <strong className='text-3xl'>{slide.title}</strong>
              <p className='text-lg'>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
