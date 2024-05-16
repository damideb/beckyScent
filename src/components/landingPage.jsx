import { useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import Section1 from './section1';
import Section2 from './section2';

export default function LandingPage() {

    const [showPage, setShowPage] = useState(false)
    
   



  return (
    <>
     {!showPage? <Section1 setShowPage={setShowPage}/> : <Section2/>}
    </>
  )
}
