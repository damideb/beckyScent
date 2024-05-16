import  {useEffect, useState} from 'react'
import Services from './services'
import Boxes from './boxes';
import Collections from './collections';
import { PiWhatsappLogo } from "react-icons/pi";
import Contact from './contact';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Section2() {

  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      offset:50,
      delay:0,
      once:true

  })
  },[])
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [forward, setForward] = useState(true)
    
    const slideShow = [
         '/src/assets/perfumes/versace.jpg',
             '/src/assets/perfumes/chanel.jpg',
             '/src/assets/perfumes/victoria.jpg',
        '/src/assets/perfumes/chanel5.jpg',
         '/src/assets/perfumes/zara.jpg',
     '/src/assets/perfumes/diffuser.jpg',
   
    ]   
  

    useEffect(()=>{
    let interval 
      if(forward){
          for (let i=0; i<slideShow.length-1; i++){
            interval = setTimeout(()=>{
              if(currentIndex===slideShow.length-1){
                setForward(false)
              }
              else{
                setCurrentIndex(currentIndex + 1)
              }
            },5000)
          }
      }
    else{
          for (let i =slideShow.length-1; i > 0; i--){
              interval =  setTimeout(()=>{
                if(currentIndex===0){
                  setForward(true)
                }
                else{
                  setCurrentIndex(currentIndex-1)
                }
            },5000)
          }
       }

       return ()=>{
        clearTimeout(interval)
       }
    },[currentIndex, forward])
  

  return (
    <div id='imgtest' className=' overflow-x-hidden '>
        <div className=' transit text-nowrap relative ' style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
        {
        slideShow.map((src,index)=>{
           return  <img key={index}  src={src} className=' z-0 h-[15em] md:h-[30em] inline w-[100%] object-cover object-right top mt-[2em]' alt='perfumePic'/> 
        })
        }
        </div>
          <a  href="https://wa.me/2348161623434" className='mx-6 bg-whatsapp z-50 w-[3em] fixed bottom-[2.5em] h-[3em] rounded-full p-2'  target="_blank">
            <PiWhatsappLogo className='text-[2rem] text-white'/>
          </a> 
        <Boxes/>
        <Services/>
        <Collections/>
        <div className=' mt-20 py-14 '>
          <h1 className=' text-center text-100 text-[1.5rem] font-medium my-10 p-5'>About Us</h1>
          <div className='flex flex-row-reverse  w-[90%] my-10'>
            <img src='/src/assets/CEO.jpg' alt='CEO-photo' className=' CEO w-[45%] h-[30em] object-cover' data-aos='slide-right'/>
            <div className='p-6 w-[55%] rounded-lg h-[35em] bg-light shadow-xl relative -right-32 -top-10' data-aos='slide-left'> 
            <p className=' py-4 leading-6 text-[1rem]'><b>Rebecca Adebowale</b> is an entrepreneur with deep rooted appreciation for artisitry scent, fashion and beauty</p>
            <p className=' py-4 leading-6 text-[1rem]'>As the CEO of Beckyscent & Style, I bring a deep passion for crafting unforgettable experiences through fragrances and fashion.
              With years of experience in the industry, I have cultivated a keen understanding of how fragrances and accessories can elevate moments, evoke emotions, and define personal identity.
               Our brand is built on the belief that every scent tells a story and every accessory is an expression of individuality. 
            </p>
            <p className=' py-4 leading-6 text-[1rem]'>We are dedicated to curating a diverse range of products that cater to the diverse tastes and desires of our customers, ensuring that each interaction with our brand leaves a lasting impression. </p>
            <p className=' py-4 leading-6 text-[1rem]'>Our commitment to quality, innovation, and customer satisfaction drives everything we do, as we strive to inspire confidence, ignite passions, and leave a lasting legacy of beauty and elegance in the world of fragrance and accessories.</p>
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
        <Contact/>     
    </div>
  )
}
