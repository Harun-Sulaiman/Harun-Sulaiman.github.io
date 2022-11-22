import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Reactimg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Nodejs from '../assets/node.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0b1f3d] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with :</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-2 '>HTML</p>
                </div>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-2 '>CSS</p>
                </div>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                    <p className='my-2 '>JAVASCRIPT</p>
                </div>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={Reactimg} alt="React icon" />
                    <p className='my-2 '>REACT</p>
                </div>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-2 '>TAILWIND</p>
                </div>
                <div className='hover:shadow-md hover:shadow-[#64aaff] shadow-lg shadow-[#050505] rounded-md hover:scale-110 duration-400'>
                    <img className='py-2 w-20 mx-auto' src={Nodejs} alt="Nodejs icon" />
                    <p className='my-2 '>NODE JS</p>
                </div>                
            </div>
        </div>

    </div>
  )
}

export default Skills