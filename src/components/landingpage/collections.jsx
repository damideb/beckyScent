import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import collection1 from '../../assets/collections/andaleeb.jpg'
import collection2 from '../../assets/collections/hayati.jpg'
import collection3 from '../../assets/collections/kalimat.jpg'
import collection4 from '../../assets/collections/khamra.jpg'
import collection5 from '../../assets/collections/mosuf.jpg'
 import collection6 from '../../assets/collections/mystical.jpg'
 import collection7 from '../../assets/collections/ramz.jpg'
import collection8 from '../../assets/collections/oudlayal.jpg'
import collection9 from '../../assets/collections/qaaed.jpg'
import collection10 from '../../assets/collections/scandal.jpg'

export default function Collections() {

    const collections =[
        {name: 'Andaleeb', src:collection1}, {name: 'Hayati', src: collection2}, 
        {name:'kalimat', src:collection3}, {name:'Khamra', src:collection4},
        {name:'Mosuf', src:collection5},{name:'Mystical', src:collection6},
        {name: 'Ramz', src:collection7},{name:'Oudlayal',src:collection8},
        {name:'Qaaed', src:collection9}, {name:'Scandal', src:collection10}
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
            return <div key={i} className=' basis-[25%] h-[6.5em] sm:h-[8em] rounded bg-light p-2 sm:p-4 last:hidden sm:last:block -z-50' data-aos='slide-right'> 
                      <img  src={item.src} alt='collection-photos' className=' collection w-[90%] sm:w-[50%] h-[60%] object-cover sm:mx-auto'/> 
                      <h2 className='text-center py-5 text-100 text-[0.8rem] font-medium'>{item.name}</h2>
                     </div>
          })}
        </div>
        <div className=' flex w-full sm:w-[85%] sm:mx-auto gap-2 sm:gap-3 my-5'>
          {collections.slice(5,10).map((item,i)=>{
            return <div key={i} className=' basis-[25%] h-[6.5em] sm:h-[8em] rounded -z-50 bg-light p-2 sm:p-4 last:hidden sm:last:block' data-aos='slide-left'> 
                      <img  src={item.src} alt='collection-photos' className=' collection w-[90%] sm:w-[50%] h-[60%] object-cover sm:mx-auto '/> 
                      <h2 className='text-center py-5 text-100 text-[0.8rem] font-medium'>{item.name}</h2>
                    </div>
          })}
        </div>
       </div>
  )
}
