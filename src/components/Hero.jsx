import IMG1 from '../assets/images/image-retro-pcs.jpg'
import IMG2 from '../assets/images/image-web-3-mobile.jpg'
import IMG3 from '../assets/images/image-gaming-growth.jpg'

function Hero() {
   return (
      <div className='m-5 md:grid lg:grid-cols-3 md:space-x-5 '>
<div className='md:h-[22em]  h-56 mt-10 bg-slate-200 p-5 flex items-center text-slate-600 '>
            
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG1} alt="" />
            <div>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>retro pcs</h1>
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer </p>
            </div>
            
         </div>

         <div className='md:h-[22em]  h-56 mt-10 bg-slate-200 p-5 flex items-center text-slate-600 '>
            
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG3} alt="" />
            <div>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>gaming growth</h1>
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer </p>
            </div>
            
         </div>

         <div className='md:h-[22em]  h-56 mt-10 bg-slate-200 p-5 flex items-center text-slate-600 '>
            
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG2} alt="" />
            <div>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>web 3.0</h1>
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer </p>
            </div>
            
         </div>
      </div>
   )
}

export default Hero