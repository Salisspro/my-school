
import { useState } from 'react'
import ICON from '../assets/icons/icon-arrow.svg'
import IMG from '../assets/images/317752578_1361099784715126_2064839100156994520_n.jpg'


export default function User() {

   const [readMore, setReadMore] = useState(true)
   return (
      <div className="m-5 mt-10 text-slate-300 text-[18px] md:flex items-center justify-center md:space-x-10">

         <div>

            <h1 className="text-teal-700 mb-5 text-5xl font-medium  text-center">Join developer communities</h1>

            <p className='text-center'>Teach others in your language, your culture, your voice.</p>
            <h2 className="text-center m-2 text-3xl">Stop being a user. Start being a builder.</h2>

            <p className='my-5 text-[17px]'>If we do not code, we are just passegers in someone elses car. But when we code we drive the future.</p>

            <div className='-mt-5  flex items-center rounded underline underline-offset-4 text-teal-500 gap-1'>
               <p className='text-[16px] '>
                  Get Started
               </p>
               <img className='w-9 animate-pulse' src={ICON} alt="" />
            </div>

         </div>
         <div className='border border-teal-600 my-15 flex items-center justify-center flex-col lg:grid lg:grid-cols-2 p-5 rounded-2xl md:w-1/2'>
            <div className='h-full '>
               <img className='rounded' src={IMG} alt="" />

            </div>
            <p className=''>Hi, i am Salisu Yushau Sulaiman
               <p onClick={() => setReadMore(!readMore)} className=''>
                  {
                     readMore ? <p className='text-teal-600 underline underline-offset-3 cursor-pointer animate-pulse'>Read More</p> : <p>a skilled React js Developer with a passion for building scalable and efficient mobile application.</p>
                  }
               </p>
               <div>

               </div>
            </p>
         </div>
      </div>
   )
}
