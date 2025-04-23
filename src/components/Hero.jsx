import IMG1 from '../assets/images/image-retro-pcs.jpg'
import IMG2 from '../assets/images/image-web-3-mobile.jpg'
import IMG3 from '../assets/images/image-gaming-growth.jpg'
import ICON from '../assets/icons/avth9zb38.webp'
import { useState } from 'react'

function Hero() {

   const [readMore, setReadMore] = useState(false)
   const [readMore1, setReadMore1] = useState(true)
   const [readMore2, setReadMore2] = useState(true)
   const [readMore3, setReadMore3] = useState(true)


   return (
      <div className='p-5 bg-slate-100 '>
         <div className='grid grid-cols-1 space-y-5'>
            <h1 className='text-4xl font-bold text-slate-800'>The Bright Future of Web 3.0?</h1>
            <p className='text-slate-500'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.{readMore1 && 'But is it really fulfilling its promise?'}</p>
            <button onClick={() => setReadMore(!readMore)} className='bg-teal-700 text-slate-100 p-2 rounded-md'>Read More</button>
         </div>


         <div className='md:grid md:grid-cols-3 gap-5 mt-10 text-slate-600'>
            <div className='mb-15'>

               <img src={IMG1} alt="" className='rounded w-full md:w-[300px] h-[200px] object-cover ' />
               <div>
                  <p>
                     Reviving Retro PCs: How the Next Generation of PC Gaming
                  </p>
                  <div onClick={() => setReadMore1(!readMore1)}>
                     {readMore1 ?
                        <div className='flex items-center gap-1'>
                           <p className='underline underline-offset-3 '>Read More</p>
                           <img className='w-8 mt-1 animate-pulse' src={ICON} alt="" />
                        </div>
                        : <p>What happens when old PCs are revived?</p>}
                  </div>
               </div>

            </div>



            <div className='mb-15'>

               <img src={IMG2} alt="" className='rounded w-full md:w-[300px] h-[200px] object-cover' />
               <div className=''>
                  <p>
                     The Downsides of AI Artistry:Can Creatives Face AI-Generated Art?
                  </p>
                  <div onClick={() => setReadMore2(!readMore2)}>
                     {readMore2 ?
                        <div className='flex items-center gap-1'>
                           <p className='underline underline-offset-3 '>Read More</p>
                           <img className='w-8 mt-1 animate-pulse' src={ICON} alt="" />
                        </div>
                        : <p>Is AI gonna take over the world?</p>}
                  </div>
               </div>

            </div>

            <div className='mb-15'>

               <img src={IMG3} alt="" className='w-full md:w-[300px] h-[200px] object-cover rounded' />
               <div >
                  <p>
                     The Growth of Gaming: How Gamers are Changing the World
                  </p>

                  <div onClick={() => setReadMore3(!readMore3)} className='flex items-center'>
                     {readMore3 ?
                        <div className='flex items-center gap-1'>
                           <p className='underline underline-offset-3 '>Read More</p>
                           <img className='w-8 mt-1 animate-pulse' src={ICON} alt="" />
                        </div>
                        : <p>How gamers are changing the world? </p>}
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Hero