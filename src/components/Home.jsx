import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0b1f3d]'>

      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
        <p className='text-[#d3deff]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#64c1ff]'>Harun Sulaiman</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 ...]'>I'm a Front End Developer.</h2>
        <p className='text-[#d3deff] py-4 max-w-[900px]'>I'm a goal-oriented Front End Developer
            looking to enhance professional experience specializing in design
            and development. Armed with a deep sense of responsibility and
            possessing very high levels of enthusiasm to give 110% for any endeavor.
        </p>
        <div>
        <Link to='Projects' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500'>
            View Projects 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home