import { useState } from 'react'
import Menu from '../assets/images/icon-menu.svg'
import Close from '../assets/images/icon-menu-close.svg'

function Page() {

  const [modal, setModal] = useState(true)

  const para = `border-teal-800 hover:border-b-2`

  return (
    <div className="cursor-pointer text-slate-200  bg-slate-100 p-2">
      <div className='flex items-center justify-between'>
        <h1 className='text-slate-500 text-sm p-3 capitalize font-bold font-mono '> <span className='text-7xl text-teal-700 font-serif'>s</span >alisspro tech</h1>
        <div onClick={() => setModal(!modal)}>

          {modal ? <img className='md:invisible' src={Menu} alt="" /> :
            <div>
              <img src={Close} alt="" />

              <div className='min-h-screen dark:bg-red-950 absolute right-0 left-0 top-0 bottom-0 z-10'>
                <div className="p-10 my-20 space-y-5 text-2xl font-extralight  ">

                  <p className={para}>Register</p>
                  <p className={para}>Home </p>
                  <p className={para}>Design</p>
                  <p className={para}>Hire</p>
                </div>
              </div>
            </div>

          }
          <div className='flex absolute right-5 invisible md:visible space-x-5 top-12 text-slate-800 '>
            <p className={para}>Register</p>
            <p className={para}>Home </p>
            <p className={para}>Design</p>
            <p className={para}>Hire</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Page