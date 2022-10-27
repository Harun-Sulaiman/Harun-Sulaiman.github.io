import React, {useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo4.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 
    bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 ... 
    text-white'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '300px'}} />
        </div>
                   
       {/*pc screen*/}
           <ul className='hidden md:flex mr-[50px]'>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul> 
       

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

      {/*mobile screen*/}
           <ul className={!nav ? 'hidden' :
            'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 ... flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul> 
   
      {/*icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a855f7] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ec4899] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>
      </div>




    </div>
  )
}

export default Navbar