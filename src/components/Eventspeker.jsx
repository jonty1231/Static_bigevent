import React, { useState } from 'react'

const Eventspeker = () => {
const [data,setdata]=useState([{img:"/01img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",},
    {img:"/02img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",},
    {img:"/03img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",},
    {img:"/04img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",},
    {img:"/05img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",},
    {img:"/06img.jpg",name:"BRUCE P. DICKSON",pro:"Chairman & CEO",}
])

  return (
    <div className='lg:p-[8rem] '>
<div className='flex flex-col text-center items-center justify-center gap-4'>
<b className=' text-4xl text-[#121A51]'>MEET OUR EVENT <span className='text-[#F7437C]'>SPEAKERS</span></b>
<img src="/shape.png" alt="" />
<p className='text-[#9160FF] text-lg'>Bigevent Is Working Worldwide From 30+ Years Ago For Business Developmentny And Enterpreniorship They  Havesi <br className='hidden lg:block'/> Something Awesome Services And Products Fors Events Development WordPress Theme.</p>
</div>

<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center my-10'>

{data.map((info,index)=><List info={info} key={index} />)}

</div>
   <div className='text-center my-10'>
    <button className='p-2 px-5 rounded-sm text-white bg-[#9160FF] hover:bg-[#F7437C] hover:-translate-y-1 duration-500 font-bold'>VIEW MORE SPEAKERS</button>
   </div>

    </div>
  )
}

const List=({info})=>{
const {img,name,pro}=info

    return(
        <div className='group  shadow-lg shadow-purple-500 mt-5' >
    <div className=' flex justify-between'>
    <div className=' overflow-hidden  w-[90%]  '>
        <img src={img} alt="" className=' group-hover:scale-110 duration-500 ' />
    </div>
    <div className='h-[100] w-[20px] overflow-hidden '>
                <div className='bg-[#9160FF] w-full h-2/6 relative tipbefor'></div>
                <div className='bg-transparent hover:bg-[#F7437C] w-full h-1/6'></div>
                <div className='bg-transparent hover:bg-[#F7437C] w-full h-1/6'></div>
                <div className='bg-transparent hover:bg-[#F7437C] w-full h-1/6'></div>
                <div className='bg-transparent hover:bg-[#F7437C] w-full h-1/6'></div>

    </div>
    </div>


<div className='px-5 flex flex-col gap-7 py-4'>
<div className='flex flex-col gap-2'>  <b className='text-[#9160FF] group-hover:text-[#F7437C] text-2xl '>{name}</b>
    <p>{pro}</p></div>  



<div>
    <div className='flex gap-8'>
    <i className="fa-solid fa-square-phone text-[#F7437C]  p-2"></i> <span className=' p-2'> +880 1234 567 890</span>
    </div>
    <div className='flex gap-8'>
    <i className="fa-solid fa-envelope text-[#F7437C] p-2"></i><span className='p-2'>williamkhanna@gmail.com</span>
    </div>
    </div>
</div>
</div>

    )
}

export default Eventspeker