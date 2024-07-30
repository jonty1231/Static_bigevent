import React from 'react'
import Herocomponent from '../components/Herocomponent'
import Aboutspeaker from '../components/Aboutspeaker'
import Footercompo from '../components/Footercompo'
import Subscribe from '../components/Subscribe'
import Our_speakers from '../components/Our_speakers'

const Speaker = () => {
  return (
    <div>
        <Herocomponent page="SPEAKERS"  details="EVENT SPEAKERS"/>

        <Aboutspeaker bgcolor="#65AC4C" miccolor="white" />
        <Our_speakers />
        <Subscribe />
        <Footercompo  footerclass="mainfooter2"/>
    </div>
  )
}

export default Speaker