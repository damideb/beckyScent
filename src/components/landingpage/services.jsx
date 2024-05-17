import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 


export default function Services() {

    useEffect(()=>{
        Aos.init({
          duration: 1500, 
          offset:-500,
          delay:0

      })
      },[])
  return (

    <div className=' m-4 mt-10  p-3 overflow-x-hidden' id='services' >
    <h2 className=' text-center text-[1.5rem] sm:text-[2rem] font-medium text-100'>Our Services</h2>
    <div className='w-[90%] sm:w-[80%] my-2 mx-auto'>
      <div className='block sm:flex gap-2 mb-14 mt-6 justify-between' data-aos='fade-left'>
        <img src='/src/assets/perfumes/fragrance.jpg' alt='model' className=' w-[20em] h-[15em] sm:w-[27em] sm:h-fit rounded shadow-md drop-shadow-sm object-cover'/>
        <div className='m-2'>
          <h2 className='text-[1.1rem] sm:text-[1.5rem] p-1 font-[500]'>Fragrance</h2>
          <p className='text-[0.9rem] p-1 my-1 leading-[1.7]'> Elevate your space and personal style with our diverse collection, tailored to suit every mood and occasion. 
              we curate an exquisite array of scents, from luxurious perfumes to enchanting diffusers and aromatic oils
            </p>
        </div>
      </div>

      <div className=' block sm:flex gap-5 my-14 justify-between sm:flex-row-reverse' data-aos='fade-left'>
        <img src='/src/assets/perfumes/gift.jpg' alt='gift-boxphoto'  className=' w-[20em] h-[15em] sm:w-[27em] sm:h-fit rounded shadow-md drop-shadow-sm'/>
        <div className='m-2'>
          <h2 className='text-[1.1rem] sm:text-[1.5rem] p-1 font-[500]'>Gift Curation</h2>
          <p className='text-[0.9rem] p-1 my-1 leading-[1.7]'>Improve your gift-giving game with our personalized curation service that ensures every present is an unforgettable experiences. 
           Let us take the hassle out of gifting as we  package and deliver your chosen treasures with care and elegance..
            </p>
        </div>
      </div>

      <div className='block sm:flex gap-5 my-14 justify-between' data-aos='fade-right'>
        <img src='/src/assets/perfumes/jelwery.jpg' alt='jelweryphoto'  className=' w-[20em] h-[15em] sm:w-[27em] sm:h-fit rounded shadow-md drop-shadow-sm'/>
        <div className='m-2'>
          <h2 className='text-[1.1rem] sm:text-[1.5rem] p-1 font-[500]'>Jelwries & Accesories</h2>
          <p className='text-[0.9rem] p-1 my-1 leading-[1.7]'> 
              Explore elegance redefined with our exquisite collection of jewelry and accessories. 
              From timeless classics to contemporary statements, our pieces cater to every style and occasion. 
              Discover the perfect adornments to complement your individuality and make every moment unforgettable.
            </p>
        </div>
      </div>

    </div>
  </div>
  )
}
