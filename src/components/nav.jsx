export default function Nav() {



  return (
    <div id='m-id' className='flex top-0 gap-5 justify-between fixed z-[100] text-sm text-100  w-full shadow-md align-middle py-3 pr-10 pl-4 animate-[opacity_5s_ease-in-out] bg-white'>
        <div className="w-[2em] h-[2em] ">   
        <img target="_blank" src="/src/assets/icons8-fragrance-30.png" className="  text-[0.7em] -skew-x-[30deg] object-cover shadow-sm " />
        <span className='text-[0.6rem] relative -top-2 -left-4 font-medium '>BeckyScent</span>
        </div>
        <div className='flex gap-4 lg:gap-11  lg:text-[1rem] font-semibold font-sans ml-4 lg:ml-52'> 
          
            <h2 className=' cursor-pointer'>
            <a href='/#about'>About us
              </a>
            </h2>
            <h2 className=' cursor-pointer'>
              <a href='/services'>Services
              </a>
            </h2>
            <h2 className=' cursor-pointer'>
            <a href='/#contact'>Contact us
              </a>
            </h2>
        </div>
    </div>
  )
}
