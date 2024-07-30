import React from 'react'
import Herocomponent from '../components/Herocomponent'
import Aboutconfrance from '../components/Aboutconfrance'
import Aboutspeaker from '../components/Aboutspeaker'
import Aboutgallery from '../components/Aboutgallery'
import Footercompo from '../components/Footercompo'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div className=''>
 <Herocomponent  page="ABOUT" details="ABOUT THE BIGEVENT"/>
 <Aboutconfrance />
 <Aboutspeaker  classevn="aboutspeaker" bgcolor="white" miccolor="#65AC4C" />
 <Aboutgallery />
 <Subscribe />
 <Footercompo  footerclass="mainfooter2"/>
    </div>
  )
}

export default About