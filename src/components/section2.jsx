import  {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Boxes from './boxes';


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
        once: false, 
        mirror: false, 
        delay:0
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

        <div className=' m-4  p-3 '>
          <h2 className=' text-center text-[2rem] font-medium'>Our Services</h2>
          <div className='w-[80%] my-2 mx-auto'>
            <div className='flex gap-5 my-14 justify-between' data-aos='slide-left'>
              <img src='/src/assets/perfumes/fragrance.jpg' alt='model' className='w-[27em] rounded shadow-md drop-shadow-sm'/>
              <div className='m-2'>
                <h2 className='text-[1.5rem] p-1 font-[500]'>Fragrance</h2>
                <p className='text-[1rem] p-1 my-1 leading-[1.7]'> Elevate your space and personal style with our diverse collection, tailored to suit every mood and occasion. 
                    we curate an exquisite array of scents, from luxurious perfumes to enchanting diffusers and aromatic oils
                  </p>
              </div>
            </div>

            <div className='flex gap-5 my-14 justify-between flex-row-reverse' data-aos='slide-left'>
              <img src='/src/assets/perfumes/gift.jpg' alt='gift-boxphoto' className='w-[27em] rounded shadow-md drop-shadow-sm'/>
              <div className='m-2'>
                <h2 className='text-[1.5rem] p-1 font-[500]'>Gift Curation</h2>
                <p className='text-[1rem] p-1 my-1 leading-[1.7]'>Improve your gift-giving game with our personalized curation service that ensures every present is an unforgettable experiences. 
                 Let us take the hassle out of gifting as we  package and deliver your chosen treasures with care and elegance..
                  </p>
              </div>
            </div>

            <div className='flex gap-5 my-14 justify-between' data-aos='slide-right'>
              <img src='/src/assets/perfumes/jelwery.jpg' alt='jelweryphoto' className='w-[27em] rounded shadow-md drop-shadow-sm'/>
              <div className='m-2'>
                <h2 className='text-[1.5rem] p-1 font-[500]'>Jelwries & Accesories</h2>
                <p className='text-[1rem] p-1 my-1 leading-[1.7]'> 
                    Explore elegance redefined with our exquisite collection of jewelry and accessories. 
                    From timeless classics to contemporary statements, our pieces cater to every style and occasion. 
                    Discover the perfect adornments to complement your individuality and make every moment unforgettable.
                  </p>
              </div>
            </div>

          </div>
        </div>
     

    </div>
  )
}
