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
import { AspectRatio } from '@chakra-ui/react';

export default function IntroSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AspectRatio>
            <Image src="/images/pattern/main/intro-slide-1.jpg" alt="Picture of the author" width={1200} height={500} />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio>
          <Image src="/images/pattern/main/intro-slide-1.jpg" alt="Picture of the author" width={1200} height={500} className='w-full' />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio>
            <Image src="/images/pattern/main/intro-slide-2.jpg" alt="Picture of the author" width={1200} height={500} />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio>
          <Image src="/images/pattern/main/intro-slide-1.jpg" alt="Picture of the author" width={1200} height={500} className='w-full' />
          </AspectRatio>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
