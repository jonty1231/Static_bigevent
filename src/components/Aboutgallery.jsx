import React, { useState } from 'react'

const Aboutgallery = () => {
const [data,setdata]=useState(["/gallery_01.jpg","/gallery_02.jpg","/gallery_03.jpg","/gallery_04.jpg","/gallery_05.jpg","/gallery_06.jpg"])

  return (
    <div className=' p-3 lg:px-[8rem]'>
<div className='text-center flex flex-col gap-3 mt-20'>
    <b className='text-5xl '>EVENT GALLERY</b>
    <p className='text-gray-600 text-xl'>Quickly harness dynamic thinking through value added models.</p>
</div>
<div className='grid md:grid-cols-3 my-5 gap-8 justify-center'>
 {data.map((info)=><div className='relative group' >
    <img src={info} alt="" />
    <div className='opacity-0 absolute w-full h-full bg-[#000000c2] top-0 left-0 flex justify-center items-center  group-hover:opacity-100 duration-500'>
    <i className="fa-solid fa-plus text-3xl border-2 border-gray-500 rounded-full px-2 py-1 text-white"></i>  
    </div>
 </div>)}


</div>
<div className='text-center my-16'>
    <button className='p-3 px-5 font-bold text-white bg-[#65AC4C] hover:bg-[#FF9822] rounded-sm duration-150'>LORD MORE PHOTOS</button>
</div>
    </div>
  )
}

export default Aboutgallery