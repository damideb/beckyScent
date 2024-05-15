import React,{useEffect} from 'react'
import AOS from 'aos';
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
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
          once:false,
          delay:0
      })
      },[])

  return (
    <div className='m-5'>
        <h2 className=' text-center text-[1.5rem]'>Explore our collections</h2>
        <div className=' flex w-[85%] mx-auto gap-3 my-5'>
          {collections.slice(0,5).map((item,i)=>{
            return <div key={i} className=' basis-[25%] h-[8em] rounded bg-light p-4' data-aos='slide-right'> 
                      <img  src={item.src} alt='collection-photos' className=' collection  w-[50%] h-[60%] object-cover mx-auto'/> 
                      <h2 className='text-center py-5 text-100 font-semibold'>{item.name}</h2>
                     </div>
          })}
        </div>
        <div className=' flex w-[85%] mx-auto gap-3 my-5'>
          {collections.slice(5,10).map((item,i)=>{
            return <div key={i} className=' basis-[25%] h-[8em] rounded bg-light p-4' data-aos='slide-left'> 
                      <img  src={item.src} alt='collection-photos' className=' collection  w-[50%] h-[60%] object-cover mx-auto'/> 
                      <h2 className='text-center py-5 text-100 font-semibold'>{item.name}</h2>
                    </div>
          })}
        </div>
       </div>
  )
}
