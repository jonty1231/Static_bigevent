import React, { useState } from 'react'

const Blogsection = () => {
const [data,setdata]=useState([{img:"blog1.jpg"},{img:"blog2.jpg"},{img:"blog3.jpg"}])
    
  return (<>
    <div  className='lg:p-[8rem] '>
        <div className='flex flex-col justify-center items-center gap-4 my-16'>
              <b className='text-5xl font-bold text-center'>LATEST UPDATES <span className='text-[#F7437C]'>BLOG</span> </b>
              <img src="/shape.png" alt="" />
              <p className='text-center text-gray-500 lg:w-4/6'>Kaynote Is Working Worldwide From 30+ Years Ago For Business Developmentny And Enterpreniorship They Have Something Awesome Services And Products Fors Events Development Wordpress Theme.</p>
        </div>



  <div className='grid md:grid-cols-3 gap-5 p-3 justify-center'>
  {data.map((info,index)=><List info={info} key={index} /> )}


  </div>

  <div className='flex justify-center my-7 pt-10'>
     <button className='p-2 px-4 rounded-sm text-white font-bold bg-[#9160FF] hover:bg-[#F7437C] hover:-translate-y-1 duration-500'>VIEW ALL BLOG POSTS</button>
 </div>
    </div>
   
 </>
  )
}

const List=({info})=>{
    const {img} =info
    return (
        <div className='group'>
        <div className='overflow-hidden  relative  imgbg '>
               <img src={img} alt=""  className='group-hover:scale-105 duration-300  '/>

               <div className='absolute w-full bottom-4 flex items-center text-white justify-around px-4 '>
         <img src="/author.png" alt="" className='z-10 ' />
         <p className='z-10 '>Somrat Islam</p>
         <i class="fa-regular fa-comments z-10"></i>
         <p className='z-10'>24 Comments</p>
               </div>
        </div>
        <div className='p-5 flex flex-col gap-3'>
             <p>24 DECEMBER 2021</p>    
              <b className='underline font-bold text-xl text-blue-600 group-hover:text-[#F7437C]'>REMO SUPPORT CENTER WHAT FOR SEMON DUCTOR PROVIDER</b>
              <p className='text-gray-500'>Drama enabe wordwide actin team who Motin Was Procedur Arramin</p>
          <div className='flex justify-between items-center' >
               <button className='p-2 px-4 font-bold text-white rounded-sm bg-[#9160FF] group-hover:bg-[#F7437C]'>READ MORE</button>
               <div className='flex gap-5 items-center shareicondiv '>
        <div className='flex gap-3 text-xl sideicon text-gray-500'>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-solid fa-basketball"></i>
        <i className="fa-brands fa-behance"></i>
        </div>
                
               <i className="fa-solid fa-share-nodes shareicon text-xl"></i>
               </div>

          </div>


        </div>
       
</div>
    )
}

export default Blogsection