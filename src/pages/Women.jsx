import React from 'react'
import { WomenHero } from '../components/WomenHero'
import { WomenCategories } from '../components/WomenCategory'
import { WomenLatestArrivals } from '../components/WomenLatestArrival'

export const Women = () => {
  return (
    <div>
        <WomenHero />
        <WomenCategories />
        <WomenLatestArrivals/>
    </div>
  )
}
