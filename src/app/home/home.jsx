import React from 'react'
import IntroSwiper from './intro'
import News from './news'
import { mockNews } from '@/data/newsData'

const Home = () => {
  return (
    <>
      {/* swiper */}
      <IntroSwiper />
      {/* news */}
      <News mockNews={mockNews} title="뉴스" />
      {/* stock */}
    </>
  )
}

export default Home