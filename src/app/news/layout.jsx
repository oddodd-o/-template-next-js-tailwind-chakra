"use client";

import Header from '@/components/layout/header/Header'
import Main from '@/components/layout/Main'
import { Container } from '@chakra-ui/react';
import React from 'react'

const NewsLayout = ({children}) => {
  return (
    <>
      <Header type='type2' title={'뉴스'} />
      <Main>
        <Container className='pt-20 pb-20'>
          {children}
        </Container>
      </Main>
    </>
  )
}

export default NewsLayout