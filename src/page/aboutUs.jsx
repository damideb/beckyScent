import {useEffect, useLayoutEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CEO from '../assets/CEO.jpg' 

export default function AboutUs() {
  
  useEffect(()=>{
    Aos.init({
      duration: 2000, 
      delay:0,
      once:false

  })
  },[])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);

  return (
    <div className=' mt-14 overflow-x-hidden'>
          <h1 className=' sm:text-center text-100 text-[1.5rem] font-medium sm:my-5 p-5'>About Us</h1>
          <div className='flex sm:flex-row-reverse flex-col w-[90%] mx-auto sm:mx-1 sm:w-[80%] sm:my-10'>
            <img src={CEO} alt='CEO-photo' className=' CEO w-[90%] h-[15em] sm:w-[45%] sm:h-[30em] object-cover px-5' data-aos='slide-right'/>
            
            <div className='px-6 py-7  w-[95%] sm:w-[55%] rounded-lg h-[35em] bg-light shadow-xl relative -right-1 -top-12 sm:-right-28 sm:-top-10' data-aos='slide-left'> 
            <p className=' py-2 sm:py-4 leading-6 text-[0.7rem] sm:text-[0.9rem]'><b>Rebecca Adebowale</b> is an entrepreneur with deep rooted appreciation for artisitry scent, fashion and beauty</p>
            
            <p className=' sm:py-4 leading-6 text-[0.7rem] sm:text-[0.9rem]'>As the CEO of Beckyscent & Style, I bring a deep passion for crafting unforgettable experiences through fragrances and fashion.
              With years of experience in the industry, I have cultivated a keen understanding of how fragrances and accessories can elevate moments, evoke emotions, and define personal identity.
               Our brand is built on the belief that every scent tells a story and every accessory is an expression of individuality. 
            </p>

            <p className=' py-2 sm:py-4 leading-6 text-[0.7rem] sm:text-[0.9rem]'>We are dedicated to curating a diverse range of products that cater to the diverse tastes and desires of our customers, ensuring that each interaction with our brand leaves a lasting impression. </p>
            
            <p className=' py-2 sm:py-4 leading-6 text-[0.7rem] sm:text-[0.9rem]'>Our commitment to quality, innovation, and customer satisfaction drives everything we do, as we strive to inspire confidence, ignite passions, and leave a lasting legacy of beauty and elegance in the world of fragrance and accessories.</p>
            
            <div className="custom-shape-divider-top-1715891121">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <rect x="1200" height="3.6"></rect>
              <rect height="3.6"></rect>
              <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" className="shape-fill"></path>
             </svg>
          </div>
          </div>
          </div> 
        </div> 
  )
}
