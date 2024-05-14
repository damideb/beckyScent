import React, {useEffect, useState} from 'react'

export default function Nav() {

  const [scrolled, setScrolled] = useState(false)

useEffect(()=>{
  window.addEventListener('scroll',hideNav )

 return ()=>{
  window.removeEventListener('scroll',hideNav )
 }
}, [scrolled])

 

function hideNav() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("m-id").classList.add("test");
    setScrolled(true)
  } else {
    setScrolled(false)
    document.getElementById("m-id").classList.remove("test");
  }
}

  return (
    <div id='m-id' className='flex top-0 gap-5 justify-between fixed z-[100]  w-full shadow-md align-middle pt-3 px-5 animate-[opacity_5s_ease-in-out] bg-white'>
       <a href='/'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className=' w-7 lg:w-12'>
          <path fill="#63E6BE" d="M318.4 16l-161 480h77.5l25.4-81.4h119.5L405 496h77.5L318.4 16zm-40.3 341.9l41.2-130.4h1.5l40.9 130.4h-83.6zM640 405l-10-31.4L462.1 358l19.4 56.5L640 405zm-462.1-47L10 373.7 0 405l158.5 9.4 19.4-56.4z"/>
          </svg>
        </a>
        <div className='flex gap-4 lg:gap-11 text-xs lg:text-[1rem] font-semibold font-sans ml-4 lg:ml-52'> 
            <h2 className=' cursor-pointer'>
            <a href='/#projects'>About US
              </a>
            </h2>
            <h2 className=' cursor-pointer'>
              <a href='/about'>Services
              </a>
            </h2>
            <h2 className=' cursor-pointer'>
            <a href='/#contact'>Contact US
              </a>
            </h2>
        </div>
    </div>
  )
}
