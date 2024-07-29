import React from 'react'
import { Link } from 'react-router-dom'

const Herocomponent = () => {
  return (
    <div className='herocompo  pt-[15rem] lg:pt-[23rem] '>
        <div className='grid lg:grid-flow-col gap-[10rem] lg:gap-0 text-white'>
         <div className=' bg-[#65AC4C] text-white flex flex-col justify-center items-center font-extrabold   relative  py-3 pt-16  '>
               <span className='absolute top-[-13rem] text-[15rem]  '> 
                24
               </span>
            <p className='text-3xl'>DECEMBER 2021</p>
         </div>
         <div className='relative text-center  lg:text-start'>
           <div  className='absolute -top-28 font-bold text-2xl w-full'>
            <p className=' my-2'>DON'T MISS THE UPCOMING EVENT</p>
            <p className='text-[#FF9822] lg:text-5xl'> BUSINESS CONFERENCE 2021</p>
           </div>
          <div className='md:bg-white p-3 flex flex-wrap   items-center justify-around'>
              <p className='bg-[#65AC4C] p-5 rounded-full  text-5xl font-bold  relative'>00<p className=' absolute -bottom-16 text-xl'> DAYS</p></p>
              <p className='bg-[#92278F] p-5 rounded-full  text-5xl font-bold relative'>00 <p className=' absolute -bottom-16 text-xl'> HOURS</p></p>
              <p className='bg-[#F5B429] p-5 rounded-full  text-5xl font-bold relative'>00<p className=' absolute -bottom-16 text-xl'> MIN</p></p>
              <p className='bg-[#FF9822] p-5 rounded-full  text-5xl font-bold relative'>00<p className=' absolute -bottom-16 text-xl'> SEC</p></p>
             <span className='mt-20 md:mt-0'>  <button className='p-3 px-5 rounded-sm  font-bold bg-[#FF9822] hover:bg-[#65AC4C]'>BOOKING NOW</button></span>
            </div> 
        
         </div>
         </div>
         <div className='mt-[10rem] px-5 lg:px-32 '>
               <div className='bg-white text-center md:flex  justify-between p-5 font-bold'>
                    <p className='text-2xl'>ABOUT THE BIGEVENT</p>

                  <div className='flex justify-center gap-4 text-xl'><Link to="/"><i className="fa-solid fa-house"></i>Home</Link> <div className='h-full w-[3px] bg-black'></div><p className='text-[#925816]'>About</p> </div>
               </div>
         </div>
    </div>
  )
}

export default Herocomponent