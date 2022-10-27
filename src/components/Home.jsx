import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-300'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#d3deff]'>Harun Sulaiman</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>
        <p className='text-[#d3deff] py-4 max-w-[900px]'>I'm a goal-oriented Front End Developer
            looking to enhance professional experience specializing in design
            and development. Armed with a deep sense of responsibility and
            possessing very high levels of enthusiasm to give 110% for any endeavor.
        </p>
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>View Projects 
            <span>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home