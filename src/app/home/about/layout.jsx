import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/header/Header'
import Main from '@/components/layout/Main'
import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header type='type2' title="about" sharing={true} prev={true} />
      <Main>{ children }</Main>
      <Footer />
    </>
  )
}

export default AboutLayout