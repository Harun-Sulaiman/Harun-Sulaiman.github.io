import React, {useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fae5d4] text-black-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '300px'}} />
        </div>
                   
       {/*pc screen*/}
           <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul> 
       

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

      {/*mobile screen*/}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul> 
   
      {/*Social icons*/}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <a href='/'>

          </a>
        </ul>
      </div>




    </div>
  )
}

export default Navbar