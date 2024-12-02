'use client'

import { useState } from 'react'
import Image from 'next/image'
import Hero from './components/hero'
import Timeline from './components/timeline'
import LogoCloud from './components/logoCloud'
import OurPeople from './components/ourPeople'
import State from './components/state'
import JoinUs from './components/joinUs'

export default function AboutPage() {

  return (
    <>
        {/* Hero section */}
        <Hero />

        {/* Timeline section */}
        <Timeline />

        {/* Logo cloud */}
        <LogoCloud />

        {/* Content section */}
        <OurPeople />

        {/* Stats */}
        <State />

        {/* Content section */}
        <JoinUs />
    </>
  )
}
