import React, { useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';

AOS.init();
const Our_speakers = () => {
const [data,setdata]=useState([{img:"/speaker_09.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_10.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_11.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_12.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_13.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_14.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_15.jpg",name:"robot smith",pro:"Founder"},{img:"/speaker_16.jpg",name:"robot smith",pro:"Founder"}])


  return (
    <div className='speaker_bg px-4 lg:px-[8rem] py-8'>
     <div className='text-center text-white py-4 flex flex-col gap-3'>
          <b className='text-5xl '>OUR SPEAKERS</b>
          <p className=''>Quickly harness dynamic thinking through value added models.</p>
     </div>
<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
{data.map((info)=><div data-aos="fade-in" className='group rounded-md overflow-hidden items-center'>
 <img src={info.img} alt=""  className='w-full '/>
 <div className='bg-white text-black text-center py-1 md:py-3 group-hover:text-[#FF9822]'>
 <b className='text-2xl font-bold uppercase '>{info.name}</b>
 <p>{info.pro}</p>
 </div>
</div>)}
</div>

    </div>
  )
}

export default Our_speakers