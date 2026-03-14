import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import DashboardPreview from './DashboardPreview'
import WhatItHas from './WhatItHas'
import HowItWorks from './HowItWorks'

const Landing = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <Hero />
        <DashboardPreview />
        <WhatItHas />
        <HowItWorks />
    </div>
  )
}

export default Landing
