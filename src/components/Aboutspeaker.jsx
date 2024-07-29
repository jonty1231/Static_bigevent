import React, { useState } from 'react'

const Aboutspeaker = () => {
const [data,setdata]=useState([{img:"/speaker_01.jpg",name:"ROBOT SMITH"},{img:"/speaker_02.jpg",name:"JANATON SMITH"},{img:"/speaker_03.jpg",name:"WILLIAM JOHN"},{img:"/speaker_04.jpg",name:"RAISEN AERO"},{img:"/speaker_05.jpg",name:"RAISEN AERO"},{img:"/speaker_06.jpg",name:"ROBOT SMITH"},{img:"/speaker_01.jpg",name:"ROBOT SMITH"},{img:"/speaker_02.jpg",name:"JANATON SMITH"}])

  return (
    <div className='aboutspeaker py-20 lg:px-[8rem]'>
<div className='text-white text-center my-5 py-5'>
    <b className='text-4xl font-bold my-3'>OUR SPEAKERS</b>
    <p>Quickly harness dynamic thinking through value added models.</p>
</div>
<div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 lg:p-0' >
    {data.map((info,index)=><div className='group'>
    <img src={info.img} alt="" className='w-full' />
    <div className='flex'>
    <i className="fa-solid fa-microphone-lines py-3 px-4 text-[#65AC4C] group-hover:text-[#FF9822] bg-white text-4xl duration-300"></i>
    <div className='bg-[#65AC4C] w-full p-2 text-white group-hover:bg-[#FF9822] duration-300'>
        <b className='text-xl'>{info.name}</b>
        <p>Founder</p>
        </div>
    </div>
</div>)}


</div>


    </div>
  )
}

export default Aboutspeaker