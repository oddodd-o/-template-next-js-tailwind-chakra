"use client";

import { Container } from '@chakra-ui/react'
import React, { Children } from 'react'

const AuthLayout = ({children}) => {
  return (
    <Container className='flex flex-col py-6'>{children}</Container>
  )
}

export default AuthLayout