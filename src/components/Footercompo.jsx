import React from 'react'

const Footercompo = ({footerclass="mainfooter"}) => {
  return (
    <div className={`${footerclass} text-white`}>
<b className='font-bold text-5xl'>BIGEVENT</b>
<div className=' flex gap-4 text-xl justify-center flex-wrap'>
<i className="fa-brands fa-facebook-f  bg-[#3B5998] p-3 px-4 rounded-full" ></i>
<i className="fa-brands fa-x-twitter bg-[#55ACEE] p-3  rounded-full"></i>
<i className="fa-brands fa-instagram bg-[#FF0084] p-3  rounded-full"></i>
<i className="fa-solid fa-basketball bg-[#F26798] p-3 rounded-full"></i>
<i className="fa-brands fa-pinterest-p bg-[#CB2027] p-3 px-4 rounded-full"></i>
<i className="fa-brands fa-google-plus-g  bg-[#DC4E41] p-3  rounded-full"></i>
</div>
<p className='text-xl text-center'>Copyright &copy; 2021. Design and Development by LabArtisan</p>
    </div>
  )
}

export default Footercompo