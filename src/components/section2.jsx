import  {useEffect, useState} from 'react'
import Services from './services'
import Boxes from './boxes';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Collections from './collections';


export default function Section2() {
    
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
      AOS.init({
        duration: 1000, 
        easing: 'ease-in-out',

    })
    },[])
  

  return (
    <div id='imgtest' className=' overflow-x-hidden'>
        <div className=' transit text-nowrap relative ' style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
        {
        slideShow.map((src,index)=>{
           return  <img key={index}  src={src} className=' z-0 h-[30em] inline w-[100%] object-cover object-right top mt-[2em]' alt='perfumePic'/> 
        })
        }
        </div>
        <Boxes/>
        <Services/>
        <Collections/>
       
    </div>
  )
}
