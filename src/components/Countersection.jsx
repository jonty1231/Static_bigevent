import React, { useState } from 'react'

const Countersection = () => {
  const [data,setdata]=useState([{num:"00",duration:"Days",color:"#FA5B7C",img:"/06.png"},
                                 {num:"00",duration:"Hours",color:"#FA5B7C",img:"/08.png"},
                                 {num:"00",duration:"MIN",color:"#FA5B7C",img:"/04a.png"},
                                 {num:"00",duration:"SEC",color:"#FA5B7C",img:"/03a.png"},
                               
  ])

  return (
    <div className='lg:px-[8rem] Countersection text-white py-12  md:py-[5rem] lg:py-[7rem] flex flex-col justify-center items-center gap-16' >
   <div className='text-center'><p className='m-4'>SAVE THE DAY</p>      
<b className='text-4xl text-center'>UI.UX DESIGN BOOTCAMP IN NEW YEAK <br className='hidden md:block' />CITY HURRY UO! ONLY 350 SEATS</b></div>
<div className='grid grid-cols-2 md:grid-cols-4 gap-6' >
  {data.map((info,index)=><Buble info={info} key={index} />)}
</div>
<button className='bg-[#925FFC] p-3 px-5 font-bold rounded-sm hover:-translate-y-1 hover:bg-[#FF41C3] duration-500'>GET REGISTER NOW!</button>

    </div>
  )
}
const Buble=({info})=>{
  const {num,duration,img} =info;
  return(
    <div className='rounded-full bg-white p-5 px-7  flex flex-col justify-center items-center gap-1 text-xl relative  overflow-hidden'>
  <p className={`text-[#FA5B7C] font-bold text-3xl `}>{num}</p>
  <b className='relative z-10'>{duration}</b>
  <img src={img} alt=""  className='absolute bottom-[-10px] z-0 adanime'/>
    </div>
  )
}

export default Countersection