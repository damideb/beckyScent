import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Collections() {

    const collections =[
        {name: 'Andaleeb', src:'/src/assets/collections/andaleeb.jpg'}, {name: 'Hayati', src: '/src/assets/collections/hayati.jpg'}, 
        {name:'kalimat', src:'/src/assets/collections/kalimat.jpg'}, {name:'Khamra', src:'/src/assets/collections/khamra.jpg'},
        {name:'Mosuf', src:'/src/assets/collections/mosuf.jpg'},{name:'Mystical', src:'/src/assets/collections/mystical.jpg'},
        {name: 'Ramz', src:'/src/assets/collections/ramz.jpg'},{name:'Oudlayal',src:'/src/assets/collections/oudlayal.jpg'},
        {name:'Qaaed', src:'/src/assets/collections/qaaed.jpg'}, {name:'Scandal', src:'/src/assets/collections/scandal.jpg'}
      ]

      useEffect(()=>{
        Aos.init({
          duration: 2000, 
          offset:-400,
        
          delay:0

      })
      },[])

  return (
    <div className='m-5 mb-11'>
        <h2 className=' text-center text-[1.5rem] text-100 font-medium' data-aos='fade-down'>Explore our scent collections</h2>
        <div className=' flex w-full sm:w-[85%] sm:mx-auto gap-2 sm:gap-2 my-5 '>
          {collections.slice(0,5).map((item,i)=>{
            return <div key={i} className=' basis-[25%] h-[6.5em] sm:h-[8em] rounded bg-light p-2 sm:p-4 last:hidden sm:last:block' data-aos='slide-right'> 
                      <img  src={item.src} alt='collection-photos' className=' collection w-[90%] sm:w-[50%] h-[60%] object-cover sm:mx-auto'/> 
                      <h2 className='text-center py-5 text-100 text-[0.8rem] font-medium'>{item.name}</h2>
                     </div>
          })}
        </div>
        <div className=' flex w-full sm:w-[85%] sm:mx-auto gap-2 sm:gap-3 my-5'>
          {collections.slice(5,10).map((item,i)=>{
            return <div key={i} className=' basis-[25%] h-[6.5em] sm:h-[8em] rounded bg-light p-2 sm:p-4 last:hidden sm:last:block' data-aos='slide-left'> 
                      <img  src={item.src} alt='collection-photos' className=' collection w-[90%] sm:w-[50%] h-[60%] object-cover sm:mx-auto'/> 
                      <h2 className='text-center py-5 text-100 text-[0.8rem] font-medium'>{item.name}</h2>
                    </div>
          })}
        </div>
       </div>
  )
}
