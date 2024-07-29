import React from 'react'

const SponserSection = () => {
  return (
    <div className='sponsersection lg:p-[8rem]'>
   <div className=' flex flex-col justify-center  text-white items-center gap-5'>
<b className='text-4xl text-center'>OUR EVENT <span className='text-[#F7437C]'>SPONSORS</span> </b>
<img src="/shape.png" alt="" />
<p className='lg:w-4/6 text-center'>Kaynote Is Working Worldwide From 30+ Years Ago For Business Developmentny And Enterpreniorship They Have Something Awesome Services And Products Fors Events Development Wordpress Theme.</p>
   </div>
<div>
   <div className='flex justify-center gap-16 flex-wrap my-10 imgcur'>
<img src="/sponsop1.png" alt=""  />
<img src="/sponsop2.png" alt="" />
<img src="/sponsop3.png" alt="" />
<img src="/sponsop4.png" alt="" />
<img src="/sponsop5.png" alt="" />
   </div> 
   <div className='flex justify-center gap-16 flex-wrap my-10 imgcur'>
<img src="/sponsop6.png" alt="" />
<img src="/sponsop7.png" alt="" />
<img src="/sponsop8.png" alt="" />
<img src="/sponsop9.png" alt="" />

   </div>
   <div className='flex justify-center gap-16 flex-wrap my-10 imgcur'>
<img src="/sponsop10.png" alt="" />
<img src="/sponsop11.png" alt="" />
<img src="/sponsop12.png" alt="" />

   </div>

</div>



<div className='flex justify-center'>
    <button className='bg-[#F7437C] p-2 px-4 text-white font-bold rounded-sm shadow-[#f7437c4b] shadow-md     hover:-translate-y-1 duration-300'>BECOME A SPONSOR</button>
</div>
    </div>
  )
}

export default SponserSection