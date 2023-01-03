import React from 'react'
import WorkImg from '../assets/WorkImg.jpg'
import mypage from '../assets/mypage.JPG'


const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen text-gray-300 bg-[#0b1f3d]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-4'>Check out some of my projects :</p>
            </div>
       
            {/*container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                    <article>
                        {/*original 1*/ }
                        <div 
                            style={{backgroundImage:`url(${mypage})`}} 
                            className='shadow-md shadow-[#64aaff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/*hover*/}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <div className='pt-1 text-center'>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Live</button>
                                        </a>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <p className='text-2xl text-center text-gray-300 pt-3'>
                            My Portfolio
                        </p>
                        <p className=' text-center text-gray-300'>
                            Tech Stack: React, Javascript, Html, Tailwind Css.
                        </p>
                    </article>
                </div>
                <div>
                    <article>
                        {/*2*/ }
                        <div 
                            style={{backgroundImage:`url(${WorkImg})`}} 
                            className='shadow-md shadow-[#64aaff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/*hover*/}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <div className='pt-1 text-center'>
                                
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <p className='text-2xl text-center text-gray-300 pt-3'>
                            Landing Page
                        </p>
                        <p className=' text-center text-gray-300'>
                            Tech: Wix
                        </p>
                    </article>
                </div>
                <div>
                    <article>
                        {/*3*/ }
                        <div 
                            style={{backgroundImage:`url(${WorkImg})`}} 
                            className='shadow-md shadow-[#64aaff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/*hover*/}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <div className='pt-1 text-center'>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <p className='text-2xl text-center text-gray-300 pt-3'>
                            E-commerce 
                        </p>
                        <p className=' text-center text-gray-300'>
                            Tech: Wix
                        </p>
                    </article>
                </div>
                <div>
                    <article>
                        {/*4*/ }
                        <div 
                            style={{backgroundImage:`url(${WorkImg})`}} 
                            className='shadow-md shadow-[#64aaff] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/*hover*/}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <div className='pt-1 text-center'>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Demo</button>
                                        </a>
                                        <a href='/'>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Code</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <p className='text-2xl text-center text-gray-300 pt-3'>
                            Food Order (Ongoing)
                        </p>
                        <p className=' text-center text-gray-300'>
                            Tech Stack: Php, Html, Css, MySql.
                        </p>
                    </article>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Projects