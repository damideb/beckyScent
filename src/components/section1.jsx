import {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'; 

export default function Section1({setShowPage}) {
  

   
    useEffect(()=>{
        AOS.init({
            duration: 1000, 
            easing: 'ease-in',
            once: false, 
            mirror: false, 
        })
        const bg= document.getElementById('backgroundDiv')
        setTimeout(()=>{
            bg.classList.add('bgtest')
            setTimeout(()=>{
                setShowPage(true)
            },1000)
        },2500)
    }, [])
  return (
        <div id='backgroundDiv'  alt='perfume' className=" h-svh relative w-full bg-center bg-cover   bg-[url('/src/assets/perfumes/model.jpg')] ">
            <h2 className='  absolute top-[60%] left-[40%] text-1.5rem md:text-[3rem] tracking-[0.4em] text-white font-extrabold' data-aos='zoom-in' >WELCOME</h2>
        </div>
   
  )
}

Section1.propTypes = {
   setShowPage: PropTypes.func.isRequired
  }
