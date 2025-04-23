import IMG1 from '../assets/images/image-retro-pcs.jpg'
import IMG2 from '../assets/images/image-web-3-mobile.jpg'
import IMG3 from '../assets/images/image-gaming-growth.jpg'
import { useState } from 'react'

function Hero() {

   const [readMore, setReadMore] = useState(false)
   const [readMore1, setReadMore1] = useState(false)
   const [readMore2, setReadMore2] = useState(false)
   const [readMore3, setReadMore3] = useState(false)


   return (
      <div className='p-5 bg-slate-100'>
         <div className='grid grid-cols-1 space-y-5'>
            <h1 className='text-4xl font-bold text-slate-800'>The Bright Future of Web 3.0?</h1>
            <p className='text-slate-500'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.{readMore1 && 'But is it really fulfilling its promise?'}</p>
            <button onClick={()=> setReadMore(!readMore)} className='bg-teal-700 text-slate-100 p-2 rounded-md'>Read More</button>
         </div>


         <div className='md:grid md:grid-cols-3 gap-5 mt-10'>
            <div className='mb-15'>
               
               <img src={IMG1} alt="" className='rounded w-full md:w-[300px] h-[200px] object-cover' />
               <p className='text-slate-500 mt-3 line-clamp-3 '>Reviving Retro PCs: How the Next Generation of PC Gaming</p>
               <p className='text-slate-500'>{readMore1 && 'What happens when old PCs are revived?'}
               <button onClick={()=>setReadMore1(!readMore1)} className=' text-slate-800 '>Read More</button>
               </p>

            </div>


            <div className='mb-15'>
               
               <img src={IMG2} alt="" className='rounded w-full md:w-[300px] h-[200px] object-cover' />
               <p className='mt-3 text-slate-500 line-clamp-3'>The Downsides of AI Artistry: Can Creatives Face AI-Generated Art?</p>
               <p className='text-slate-500'>
                  {readMore2 && 'Is AI gonna take over the world?'}
               <button onClick={()=> setReadMore2(!readMore2)} className=' text-slate-700 '>Read More</button>
               </p>

            </div>


            <div className='mb-15'>

               <img src={IMG3} alt="" className='w-full md:w-[300px] h-[200px] object-cover rounded' />
               <p className='text-slate-500 line-clamp-3 mt-3'>The Growth of Gaming: How Gamers are Changing the World</p>
               <p className='text-slate-500'>{readMore3 && 'How gamers are changing the world? '}

               <button onClick={()=> setReadMore3(!readMore3)} className=' text-slate-800 '>Read More</button>
               </p>
            </div>
         </div>
      </div>

   )
}

export default Hero