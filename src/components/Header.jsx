import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
const Links=[{name:"Home",link:"/",icon:"fa-solid fa-house ",children:["homepage style one","homepage style two","homepage style three","homepage style four","homepage style five","homepage style six","homepage style seven"]},
{name:"About",link:"/about",icon:"fa-solid fa-folder-open ",children:["About style one","about style two"]},
{name:"Speakers",link:"/speakers", icon:"fa-solid fa-volume-high ",children:[" Speakers","Speaker Details"]},
{name:"Event>",link:"/event",icon:"fa-regular fa-calendar-check ",children:["Become Sponsoor","Event Sponsor","Gallery","Gallery Massonry"]},
{name:"Pages",link:"/pages",icon:"fa-regular fa-newspaper ",children:["page-1","page-2","page-3","page-4"]},
{name:"Shop",link:"/shop",icon:" fa-solid fa-shop ",children:["Prodect Page","Product Details","Cart Page"]},]


const [scorl,setscorl]=useState(0)

  
  useEffect(() => {
    window.addEventListener('scroll', ()=>{ setscorl(scrollY);}
    );
    
    
  }, []);







const [show,setshow]=useState("")
const [shownav,setshownav]=useState(false)



const showp=(name)=>{
  show==name?setshow(""):setshow(name)

}

  return (
  <><div className={` fixed w-full  flex flex-col ${shownav?"h-full":"h-[4.7rem]"} p-4  w-screen  lg:flex-row     gap-3 overflow-hidden lg:overflow-visible items-center  ${scorl > 20?" bg-[#060d42]":"backdrop-blur-md"} shadow-lg text-white lg:px-[8rem] z-50 `}>
    <div className='flex lg:justify-start justify-between  w-full'>
  <b className='text-4xl googlefont'>BIGEVENT  </b>
  <i className="fa-solid fa-bars lg:hidden text-2xl text-white" onClick={()=>setshownav(!shownav)}></i>
  </div>
  <nav className='  lg:flex  w-full  items-center gap-16'>
    <div className=' flex gap-9 w-full flex-col lg:flex-row '>
      {Links.map((info,index)=><Navbar info={info} key={index} show={show} showp={showp} />)}
    </div>

<div className='flex gap-7 items-center w-full mt-4 lg:mt-0'>
<i className="fa-solid fa-cart-arrow-down relative text-3xl text-white"> </i>
<button className='p-2 px-4 w-[7.6rem] bg-[#FF9822] uppercase rounded-sm'> Buy Ticket</button>
</div>
     
  </nav>
  </div>
  </>
  )
}

const Navbar=({info,show,showp})=>{
 
return(
   <div className={`relative overflow-hidden group lg:hover:overflow-visible   ${show==info.name?"h-full":"h-[29px]"} `} >
    <NavLink to={info.link}  className="flex text-lg items-start justify-between relative" onClick={()=>showp(info.name)}><span className=' group-hover:opacity-0 duration-500 '  >{info.name} </span><i className={` ${info.icon }absolute top-1 left-1/4  opacity-0 duration-500 group-hover:opacity-100`}></i><i className="fa-solid fa-sort-down "></i> 
      </NavLink>
      <div className='bg-white  p-3 rounded-sm lg:absolute lg:w-[11rem] lg:translate-y-8  flex flex-col gap-4 top-10 lg:group-hover:translate-y-[-10px] duration-500  text-black'>
      {info.children.map((data)=>{return <Link className='flex'>{data}</Link>})}
        </div>

        </ div>
)
}


export default Header