"use client";

import { Container } from '@chakra-ui/react'
import React, { Children } from 'react'

const AuthLayout = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default AuthLayout