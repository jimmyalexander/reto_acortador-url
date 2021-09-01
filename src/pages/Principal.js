import React from 'react'
import { Boost } from '../components/Boost'
import { Conversor } from '../components/Conversor'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Principal = () => {
  return (
    <div className='container_principal'>
      <Header />
      <Conversor />
      <Boost />
      <Footer />
    </div>
  )
}
