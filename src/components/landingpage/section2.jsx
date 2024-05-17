import  {useEffect, useState} from 'react'
import Services from './services'
import Boxes from './boxes';
import Collections from './collections';
import { PiWhatsappLogo } from "react-icons/pi";
import { useLocation} from 'react-router-dom';


export default function Section2() {

  const location = useLocation()

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

    useEffect(()=>{
      if (location.hash) {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

  return (
    <>
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
       
    </div>
    <Services/> 
    <Collections/> 
    </>
  )
}