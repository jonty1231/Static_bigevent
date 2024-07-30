import React, { useEffect, useState } from 'react'
import { apiBaseLink } from '../utils/apilink';
import Loder from './Loder';

const Shop_main = () => {
const [loder,setloder]=useState(true)
 const [data,setdata]=useState([])
 const [page,setpage]=useState(1)

const pagehandel=()=>{
    page==1?setpage(2):setpage(1)
}

useEffect(()=>{
    const getapi=async()=>{
        setloder(true)
        try {
            const res=await fetch(`${apiBaseLink}users?page=${page}`)
            const data=await res.json()
            setdata(data.data)

        } catch (error) {
            console.log(error)
        }
        setloder(false)
        
    }
getapi()
},[page])
    console.log(data)

  return (<>
    {loder && <Loder />}
  
   {!loder && < div className='p-5 lg:px-[8rem]'>
    <div className=' grid   md:grid-cols-3 lg:grid-cols-3 my-10  gap-x-[2rem] lg:px-[10rem]'>

 {data.map((info)=><List  info={info} key={info.id} />)}
</div>

<div className='text-center'>
     {page==1? <button onClick={()=>setpage(2)} className='bg-orange-500 text-white font-bold p-2 px-4 rounded-md'>Next<i className="fa-solid fa-chevron-right ms-3"></i></button>:<button onClick={()=>setpage(1)} className='bg-orange-500 text-white font-bold p-2 px-4 rounded-md'><i className="fa-solid fa-chevron-left me-3"></i>Prev</button>}
</div>
</div>}
</>
  )
}


const List =({info})=>{
    const { avatar,email,first_name,last_name,id }=info
return(
    <div className='   shadow-lg shadow-[black] my-5 text-center bg-black text-white rounded-md overflow-hidden hover:scale-105 duration-300 cursor-grab'>
   <img src={avatar} alt=""  className='w-full h-[64%] ' />
       <p className='my-3'>{email}</p> 
       <p className='mb-3'>{first_name} .... {last_name}</p>
    </div>
)
}
export default Shop_main