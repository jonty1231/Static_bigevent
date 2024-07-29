import React from 'react'
import HeroSection from '../components/HeroSection'
import JoinEvent from '../components/JoinEvent'
import Eventspeker from '../components/Eventspeker'
import Countersection from '../components/Countersection'
import SCHEDULESecton from '../components/SCHEDULESecton'
import PricePlan from '../components/PricePlan'
import Footercompo from '../components/Footercompo'
import Blogsection from '../components/Blogsection'
import SponserSection from '../components/SponserSection'

const Homepage = () => {
  return (
   <>
   <HeroSection />
   <JoinEvent />
   <Eventspeker />
 <Countersection />
 <SCHEDULESecton />
 <PricePlan />

 <SponserSection />
<Blogsection />
 <Footercompo />
   </>


  )
}

export default Homepage