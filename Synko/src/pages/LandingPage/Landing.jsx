import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import DashboardPreview from './DashboardPreview'

const Landing = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <Hero />
        <DashboardPreview />
    </div>
  )
}

export default Landing
