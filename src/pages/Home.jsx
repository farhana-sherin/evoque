import React from 'react'
import { Hero } from '../components/Hero'
import { Collection } from '../components/Collection'
import { Top } from '../components/Top'
import { AboutUs } from '../components/AboutUs'
import { FeaturedBrands } from '../components/FeaturedBrand'
import { SeasonalCollections } from '../components/SeasonalCollections'
import { CallToAction } from '../components/Banner'


export const Home = () => {
  return (
    <div>
      <Hero />
      <Top />
      
      <SeasonalCollections />
      
      <CallToAction />
     
      <FeaturedBrands />
      
    </div>
    
  )
}
