import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Boxes(){
    return(
           <div className='flex flex-col sm:flex-row mx-10 px-5 gap-5 relative -top-5 sm:-top-2  '>
          <div className='bg-white h-[21.5em] sm:h-[25em] sm:basis-[30%] shadow-lg sm:p-6 text-center drop-shadow-xl  rounded'>
            <h2 className=' text-[0.9rem] sm:text-[1.2rem] font-semibold p-4 my-1'>Nationwide and Quick delivery service</h2>
            <div className=' bg-light w-[4em] h-[4em] p-2 rounded-full m-auto animate-bounce '><TbTruckDelivery className='text-[3rem] text-100 p-2 text-center'/></div>
            <p className='text-[1rem] p-3 my-1 leading-[1.7]'>Delivering your goods to you swiftly and safely is so important to us. We value every single customer that is why we trust our deliveries to our carefully selected courier. </p>
          </div>

          <div className='bg-white h-[21.5em] sm:h-[27em] sm:basis-[30%] shadow-lg sm:p-6 text-center drop-shadow-xl sm:-mt-5 rounded'>
            <h2 className=' text-[0.9rem] sm:text-[1.2rem] font-semibold p-4 my-1'>Long Lasting and Enduring product</h2>
            <div className=' bg-light w-[4em] h-[4em] p-2 rounded-full m-auto animate-pulse '><MdOutlineProductionQuantityLimits className='text-[3rem] text-100 p-2 text-center'/></div>
            <p className='text-[1rem] p-3 my-1 leading-[1.7]'>We take pride in sourcing only the finest ingredients, resulting in products that not only stand the test of time but also evoke memories and emotions with every wear.</p>
          </div>
          <div className='bg-white h-[21.5em] sm:h-[25em] sm:basis-[30%] shadow-lg sm:p-6 text-center drop-shadow-xl rounded'>
            <h2 className=' text-[0.9rem] sm:text-[1.2rem] font-semibold p-4 my-1'>Fair pricing</h2>
            <div className=' bg-light w-[4em] h-[4em] p-2 rounded-full m-auto animate-pulse '><GiMoneyStack className='text-[3rem] text-100 p-2 text-center'/></div>
              <p className='text-[1rem] p-3 my-1 leading-[1.7]'>We prioritize transparency in all our dealings.Our pricing reflects our commitment to fairness, offering competitive rates without compromising on quality</p>
          </div>
        </div>
       
    )
}