import React, {useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo4.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-2 
    bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 ... 
    text-white'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '300px'}} />
        </div>
                   
       {/*pc screen*/}
           <ul className='font-semibold hidden md:flex mr-[50px]'>
                <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li><Link to='Projects' smooth={true} duration={500}>Projects</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul> 
       

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

      {/*mobile screen*/}
           <ul className={!nav ? 'hidden' :
            'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 ... flex flex-col justify-center items-center'}>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}><li className='bg-[#0b1f3d] rounded-md w-[150px] px-6 py-3 my-2 flex items-center text-2xl'>Home</li></Link>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}><li className='bg-[#0b1f3d] rounded-md w-[150px] px-6 py-3 my-2 flex items-center text-2xl'>Skills</li></Link>
                <Link onClick={handleClick} to='Projects' smooth={true} duration={500}><li className='bg-[#0b1f3d] rounded-md w-[150px] px-6 py-3 my-2 flex items-center text-2xl'>Projects</li></Link>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}><li className='bg-[#0b1f3d] rounded-md w-[150px] px-6 py-3 my-2 flex items-center text-2xl'>Contact</li></Link>
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
            href='https://github.com/Harun-Sulaiman'>
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a855f7] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='mailto:harunsantuso@gmail.com'>
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