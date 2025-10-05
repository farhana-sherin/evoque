import React from 'react'
import { MenHero } from '../components/MenHero'
import { MenCategories } from '../components/MenCategory'

import { SeasonalCollections } from '../components/SeasonalCollections'
import { LatestArrivals } from '../components/LatestArrivalMen'

export const Men = () => {
  return (
    <div>
        <MenHero />
        <MenCategories />
        <LatestArrivals/>
        

    </div>
  )
}
