import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='px-5 md:px-8'>{ children }</div>
  )
}

export const Section = ({ children }) => {
  return (
    <section className='py-20'>{ children }</section>
  )
}

export default Container