"use client";

import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Main = ({ children }) => {
  return (
    <main className='flex-1'>
      { children }
    </main>
  )
}

export const Section = ({ title, children }) => {
  return (
    <section className='py-20'>
      <Container className='flex flex-col gap-5'>
        {title && <Heading>{title}</Heading>}
        <div>{children}</div>
      </Container>
    </section>
  )
}

export default Main