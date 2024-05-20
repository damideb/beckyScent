import { Outlet,Link } from "react-router-dom";
import Contact from "./contact";
import icon from "../assets/icons8-fragrance-30.png"

export default function Nav() {
  

  return (
    <>
    <div id='m-id' className='flex top-0 gap-5 justify-between fixed z-[100] text-[0.7rem] text-100  w-full shadow-md align-middle py-3 pr-4 sm:pr-10 pl-4 animate-[opacity_5s_ease-in-out] bg-white'>
        <Link to='/home'>
        <div className="w-[2em] h-[2em] ">   
        <img target="_blank" src={icon} className="  text-[0.7em] object-cover shadow-sm " />
        </div>
        </Link>
        <div className='flex gap-4 lg:gap-11  sm:text-[1rem] font-semibold font-sans '> 
            <h2 className=' cursor-pointer'>
            <Link to='/about'>About us
              </Link>
            </h2>
            <h2 className=' cursor-pointer'>
              <Link to='/home#services'>Services
              </Link>
            </h2>
            <h2 className=' cursor-pointer'>
            <Link to='/home#contact'>Contact us
              </Link>
            </h2>
        </div>
    </div>
   <main className="overflow-x-hidden"><Outlet/></main>   
     <Contact/>
   </> 
  )
}
