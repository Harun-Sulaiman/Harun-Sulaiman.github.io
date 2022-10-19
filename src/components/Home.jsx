import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p>Hello, my name is</p>
        <h1>Harun Sulaiman</h1>
        <h2>I'm a Front End Developer.</h2>
        <p>Goal-oriented Front End Developer
            looking to enhance professional experience specializing in design
            and development. Armed with a deep sense of responsibility and
            possessing very high levels of enthusiasm to give 110% for any endeavor
        </p>
        <div>
          <button>View Projects <HiArrowNarrowRight/></button>
        </div>
      </div>

    </div>
  )
}

export default Home