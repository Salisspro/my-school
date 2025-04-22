import IMG1 from '../assets/images/image-retro-pcs.jpg'
import IMG2 from '../assets/images/image-web-3-mobile.jpg'
import IMG3 from '../assets/images/image-gaming-growth.jpg'

function Hero() {
   return (
      <div className='flex flex-col md:flex-row items-center justify-between p-5 bg-slate-100'>
         <div className='flex flex-col space-y-5'>
            <h1 className='text-4xl font-bold text-slate-800'>The Bright Future of Web 3.0?</h1>
            <p className='text-slate-500'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className='bg-teal-700 text-slate-100 p-2 rounded-md'>Read More</button>
         </div>
         <div className='flex flex-col md:flex-row space-x-5 mt-5 md:mt-0'>
            <div className='flex flex-col space-y-5'>
               <h1 className='text-2xl font-bold text-slate-800'>New</h1>
               <img src={IMG1} alt="" className='w-full md:w-[300px] h-[200px] object-cover' />
               <p className='text-slate-500'>Reviving Retro PCs: How the Next Generation of PC Gaming</p>
               

            </div>


            <div className='flex flex-col space-y-5 mt-10'>
               <h1 className='text-2xl font-bold text-slate-800'>New</h1>
               <img src={IMG2} alt="" className='w-full md:w-[300px] h-[200px] object-cover' />
               <p className='text-slate-500'>The Downsides of AI Artistry: Can Creatives Face AI-Generated Art?</p>
               <p className='text-slate-500'>Is AI gonna take over the world?</p>
               <button className='bg-teal-700 text-slate-100 p-2 rounded-md'>Read More</button>



            </div>


            <div className='flex flex-col space-y-5 mt-21'>

               <h1 className='text-2xl font-bold text-slate-800'>New</h1>

               <img src={IMG3} alt="" className='w-full md:w-[300px] h-[200px] object-cover' />
               <p className='text-slate-500'>The Growth of Gaming: How Gamers are Changing the World</p>
               <p className='text-slate-500'>How gamers are changing the world?</p>
               <button className='bg-teal-700 text-slate-100 p-2 rounded-md'>Read More</button>
            </div>
         </div>
      </div>

   )
}

export default Hero