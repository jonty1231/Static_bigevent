import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-[#FF9822] text-white  lg:px-[8rem] pt-16  py-3 '>
    <div className='flex  min-h-[10rem]  flex-col items-center lg:flex-row lg:items-start font-bold gap-10'> <div className='text-3xl '>Join Our Newsletter</div>
    <div className='w-4/6 flex  flex-col md:flex-row gap-3 lg:gap-0'>
    <input type="text" name="" id=""  placeholder='Enter your e-mail here' className='border-white bg-transparent border-[1px] placeholder-white rounded-sm  p-3 md:w-4/6 ' /> 
  <button className='bg-white text-[#FF9822] p-3 px-4 rounded-sm lg:relative top-12 '>Subscribe Now</button></div></div>
    </div>
  )
}

export default Subscribe