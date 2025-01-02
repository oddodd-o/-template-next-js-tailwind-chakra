import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='px-5 md:px-8'>{ children }</div>
  )
}

export const Wrap = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col pb-0'>
      { children }
    </div>
  )
}

export const Section = ({ children, title }) => {
  return (
    <section className='py-20'>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Container