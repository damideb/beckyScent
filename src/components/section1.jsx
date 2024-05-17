import {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';

export default function Section1() {
  
    const navigate = useNavigate()

    const [showPage, setShowPage] = useState(false)

   
    useEffect(()=>{
        AOS.init({
            duration: 2000, 
            easing: 'ease-in',
            delay:100,
            once: false, 
            mirror: false, 
        })
        const bg= document.getElementById('backgroundDiv')
        setTimeout(()=>{
            bg.classList.add('bgtest')
            setTimeout(()=>{
                setShowPage(true)
            },900)
        },2500)
    }, [])


    if(showPage){
        navigate('/home',{replace:true})
    }
  return (
        <div id='backgroundDiv'  alt='perfume' className=" h-svh relative w-full bg-center bg-cover   bg-[url('/src/assets/perfumes/model.jpg')] ">
            <h2 className='  absolute top-[50%] left-[30%] sm:top-[60%] sm:left-[40%] text-[1.5rem] sm:text-[3rem] tracking-[0.4em] text-white font-extrabold' data-aos='zoom-in' >WELCOME</h2>
        </div>
   
  )
}

// Section1.propTypes = {
//    setShowPage: PropTypes.func.isRequired
//   }
