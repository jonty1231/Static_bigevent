import React from 'react'
import Herocomponent from '../components/Herocomponent'
import Subscribe from '../components/Subscribe'
import Footercompo from '../components/Footercompo'
import Shop_main from '../components/Shop_main'

const Shop = () => {
  return (
    <div>
<Herocomponent page="Shop" details="EVENT PRODUCT" />
<Shop_main />
<Subscribe />
<Footercompo  footerclass="mainfooter2"/>
    </div>
  )
}

export default Shop