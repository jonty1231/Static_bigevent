import React, { useState } from 'react'


const JoinEvent = () => {
const [data,setdata]=useState([{png:"/03.png",anim:"/03a.png",text:"Networking"},{png:"/04.png",anim:"/04a.png",text:"Great Speakers"},{png:"/05a.png",anim:"/05.png",text:"Have Fun"},{png:"/06a.png",anim:"/06.png",text:"New People"},{png:"/07a.png",anim:"/07.png",text:"Mentor Program"},{png:"/08a.png",anim:"/08.png",text:"After Party"}])



  return ( 
  <>
  <div className='grid grid-cols-1 gap-3  ps-2 md:grid-cols-2  my-10 lg:px-[8rem]'>
<div className='flex flex-col gap-5'>
<b className='text-4xl font-bold'>Why Join <span className='text-[#F7437C]'>Bigevent?</span><br />
Why You Should Join Event</b>
<img src="/shape.png" alt=""  className='w-2/6'/>
<p className='text-[#9160FF]'>Bigevent is Working Worldwide From 30+ Years Ago For Business Meetup 2.0 And Enterpreno Quicky deliver unique customer service through high andng standards in resources Ecientl reconceptuae ethic functona after distinctive channel. Assertive renterdiate distrbuted leadership skills without orthogona Holistic envisioneer focused markets rather than highly.</p>
 <div className='flex gap-5'><button className='text-white bg-[#F7437C] p-2 px-4 rounded-sm hover:translate-y-[-5px] duration-500 shadow-sm shadow-[#F7437C]'>Read more</button>
<button className='text-white bg-[#9160FF] p-2 rounded-sm px-4 hover:translate-y-[-5px] duration-500 shadow-sm shadow-[#9160FF]'>
  Read more
</button></div> 
</div>
<div className='grid   grid-cols-2 lg:grid-cols-3 gap-4 '>

  {data.map((info,index)=>{return <Cricles  info={info} Key={index} num={index==1 || index==4?true:false}/>})}
</div>

  </div>
  
  </>
  )
}



const Cricles=({info,num})=>{
    const {png,text,anim}=info;
    return(<>

<div className={`rounded-[100%] border-[1px]  flex flex-col justify-center items-center relative overflow-hidden   size-[90%]     ${num?"hidden lg:flex  ":" mb-[7rem] lg:mb-0" }`} >

<img src={png} alt="" />
<p className='text-white z-10  text-sm md:text-md font-bold'>{text}</p>

<img src={anim} alt=""  className='absolute bottom-[-50px] w-full md:w-full adanime '  />


</div>


</>  )
}

export default JoinEvent