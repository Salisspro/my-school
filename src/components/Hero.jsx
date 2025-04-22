import IMG1 from '../assets/images/image-retro-pcs.jpg'
import IMG2 from '../assets/images/image-web-3-mobile.jpg'
import IMG3 from '../assets/images/image-gaming-growth.jpg'

function Hero() {
   return (
      <div className='m-5  md:grid md:grid-cols-3 md:space-x-5'>

         <div className='break-all mt-10 h-[15em] bg-slate-200 p-5 text-slate-600 md:h-[22em] '>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>touch typing</h1>
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG1} alt="" />
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer easy way by taking a practicing everyday.</p>
            {/* <button className='bg-teal-700 text-2xl mt-3 p-4 rounded text-slate-200'>Get Started</button> */}
         </div>

         <div className='md:h-[22em] break-all h-[15em] mt-10 bg-slate-200 p-5 text-slate-600 '>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>Gamers </h1>
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG3} alt="" />
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer easy way by taking a practicing everyday.</p>
            {/* <button className='bg-teal-700 text-2xl mt-3 p-4 rounded text-slate-200'>Get Started</button> */}
         </div>

         <div className='md:h-[22em] h-[15em] mt-10 bg-slate-200 p-5  text-slate-600 break-all'>
            <h1 className='text-sm underline mb-2 text-blue-700 cursor-pointer uppercase'>check in</h1>
            <img className='md:w-full h-36 rounded  w-35 m-2 float-right ' src={IMG2} alt="" />
            <p className='capitalize '>Welcome to 3.5webG this sectoin will talk about how to master computer easy way by taking a practicing everyday.</p>
            {/* <button className='bg-teal-700 text-2xl mt-3 p-4 rounded text-slate-200'>Get Started</button> */}
         </div>
      </div>
   )
}

export default Hero