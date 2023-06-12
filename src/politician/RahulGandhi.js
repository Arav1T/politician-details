import React from 'react';
import Congress from './Congress.png';
import Rahul from './Rahul.png'
import RahulCon from './RahulCon.png'

export default function RahulGandhi() {
  return (
    <>
    <div className='bg-black w-screen bg-opacity-10 '>
      <div className=' border-0 rounded-lg mx-20  bg-white'>
        <header className=' '>
          <nav className='flex justify-end'>
            <div className='w-1/5 h-20 border-hidden flex border-r-[20x] border-b-[20px] '>
              <div className='w-1/2'><h5 className='bg-orange-600 ' >NAme</h5>
                <h5 className='bg-green-700  '>Surname</h5></div>
              <div><img src={Congress} alt="congress" className='h-12 sm:pl-3 lg:pl-10 md:pl-10' /></div>
            </div>
            <div className=' w-3/4'>
              <ul className='h-6 bg-black flex justify-end text-slate-50 space-x-3 pr-4 pt-2'>
                <li><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg> </li>
                <li><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg></li>
                <li><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd" />
                </svg> </li>
                <li><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg> </li>
              </ul>
              <ul className='h-6 bg-green-700 flex justify-end text-white space-x-2 pr-4'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
            <div></div>
          </nav>
        </header>
        <main className=" " >
          <div className='flex justify-between'>
            <span className='flex justify-center align-middle pl-28 pt-20 w-1/2 ' >
            <img src={Congress} alt="Congress" className='opacity-20 top-10 left-20 xl:top-16 xl:left-36 lg:top-14 sm:max-w-full sm:h-auto  lg:left-32 md:top-12 md:left-28  sm:top-10 sm:left-20 bg-no-repeat absolute'/>
              <h3 className='bg-black border-hidden text-white h-8 p-2 '>Leadership</h3>
              <p>is the capacity to translate vision into reality s the capacity to translate vision into reality s the capacity to translate vision into reality s the capacity to translate vision into reality s the capacity to translate vision into reality s the capacity to translate vision into reality s the capacity to translate vision into reality</p>
            </span>
            <span>
              <img src={Rahul} alt="Rahul" className='h-96 mb-4 bg-white '/>
            </span>
          </div>
          
        </main>
        <footer style={{top:"-21px"}} className='relative '>
      <div className='flex justify-center items-center h-screen'>
        <span className='  rounded-lg p-8 shadow-lg'>
          <img src={RahulCon} alt="RahulCon" className='h-96' />
        </span>
        <span>
        <div class="flex justify-center items-center h-screen">
        <div class=" rounded-lg p-8 shadow-lg">
            <h1 class="text-2xl mb-4">Responsive Box</h1>
            <p>This box is responsive using Tailwind CSS.</p>
        </div>
    </div>
        </span>
        </div>
      </footer>
      </div>
      <svg className='relative top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" style={{top:"-1100px"}}>
        <path fill="#FF9933" d="M0,10C150,150 350,0 500,145V180H0V80Z"/>
        <path fill="#FFFFFF" d="M0,10C150,150 350,30 500,145V180H0V80Z"/>
        <path fill="#128807" d="M0,10C150,150 350,60 500,145V180H0V80Z"/>
      </svg>
      
      </div>
    </>
  )
}
