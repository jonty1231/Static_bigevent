import React from 'react'
import Herocomponent from '../components/Herocomponent'
import Aboutconfrance from '../components/Aboutconfrance'
import Aboutspeaker from '../components/Aboutspeaker'
import Aboutgallery from '../components/Aboutgallery'
import Footercompo from '../components/Footercompo'

const About = () => {
  return (
    <div className=''>
 <Herocomponent />
 <Aboutconfrance />
 <Aboutspeaker />
 <Aboutgallery />
 <Footercompo  footerclass="mainfooter2"/>
    </div>
  )
}

export default About