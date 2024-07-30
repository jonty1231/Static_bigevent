import React, { useState } from 'react'

const SCHEDULESecton = () => {
const [val,setvall]=useState(0)
const [val2,setvall2]=useState(0)
const [val3,setvall3]=useState(0)
const [data,setdata]=useState([
  {img:"/rimg1.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  {img:"/rimg2.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  {img:"/rimg3.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  {img:"/rimg6.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  {img:"/rimg9.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  {img:"/rimg12.jpg",EXPERIENCE:"DIPLOMA IN USER EXPERIENCE DESIGN",time:"08:30am - 09:30pm",name:"WILLIAM L. KHANNA"},
  ])
const handelData=(indexnum)=>{
  val==indexnum?setvall(""):setvall(indexnum)
}
const handelData2=(indexnum)=>{
  val2==indexnum?setvall2(""):setvall2(indexnum)
}
const handelData3=(indexnum)=>{
  val3==indexnum?setvall3(""):setvall3(indexnum)
}
  return (
    <div className='lg:px-[8rem]'>
<div className='flex flex-col justify-center items-center gap-3'>
    <b className='text-5xl font-bold text-center'>OUR EVENT <span className='text-[#F7437C] '>SCHEDULES</span></b>
    <img src="/shape.png" alt="" />
    <p className='lg:w-4/6 text-center text-gray-500'>Bigevent Is Working Worldwide From 30+ Years Ago For Business Developmentny And Enterpreniorship They Havesi Something Awesome Services And Products Fors Events Development WordPress Theme.

</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
<div className=' shadow-sm'>
    <div className='p-3 text-center font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>DAY 1 : 22 DECEMBER 2021</div>
   {data.map((info,index)=><List  info={info}  key={index} index={index} handelData={handelData} val={val} />)}
</div>
<div className=' shadow-sm'>
    <div className='p-3 text-center font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>DAY 1 : 22 DECEMBER 2021</div>
   {data.map((info,index)=><List  info={info}  key={index} index={index} handelData={handelData2} val={val2} />)}
</div>
<div className=' shadow-sm'>
    <div className='p-3 text-center font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>DAY 1 : 22 DECEMBER 2021</div>
   {data.map((info,index)=><List  info={info}  key={index} index={index} handelData={handelData3} val={val3} />)}
</div>

</div>

<div className='text-center my-[5rem]'><button className='p-2 px-5 rounded-sm bg-[#9160FF] text-white font-bold hover:-translate-y-1 hover:bg-[#F7437C] duration-700' >DOWNLOAD SCHEDULE PDF</button></div>
 
    </div>
  )
}

const List =({info,index,handelData,val})=>{
  const {img,name,EXPERIENCE,time}=info
  return(
    <div className='flex flex-col gap-3 px-4 mt-10'>
    <div className='flex justify-between '>
     <p>{time}</p> <i className="fa-solid fa-plus" onClick={()=>handelData(index+1)}></i>
    </div>
       <p className='font-bold  text-[#121A51]'>{EXPERIENCE}</p>
         <div className={`overflow-hidden h-[1.7rem] ${val==index+1?"h-[12.6rem]":"  "}  duration-500 `}><p>Main Hall</p> <div className='text-gray-500 mt-2'>Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.</div></div> 
       
       <div className='flex gap-4 items-center'>
          <div><img src={img} alt="" /></div>
         <div><p>{name}</p><p className='text-gray-600'>UX Designer</p></div>
       </div>




   </div>
  )
}


export default SCHEDULESecton