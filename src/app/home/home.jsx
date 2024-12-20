import React from 'react'
import IntroSwiper from './components/introSwiper'
import News from './components/news'
import { mockNews } from '@/data/newsData'
import Hero from './components/hero'
import Bento from './components/bento'

const Home = () => {
  return (
    <>
      <Hero />
      <Bento />
      <IntroSwiper />
      <News mockNews={mockNews} title="뉴스" />
    </>
  )
}

export default Home