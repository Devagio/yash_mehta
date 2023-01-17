import React from 'react'
import home_image from '../assets/home_image3.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='md:h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800 md:px-12'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full pt-20'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white 
                pr-4'>
                    I'm a Computational Astrophysicist
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I create software, run simulations, analyse data, 
                    construct APIs, and much more, in humankind's pursuit of
                    better understanding the universe around us. 
                </p>

                <p className='text-gray-500 pb-4 max-w-md'>
                    While there 
                    is a significant overlap, this website aims to showcase
                    my computer skills strictly outside astrophysics.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group
                     text-white w-fit px-6 py-3 my-2 flex items-center 
                     rounded-md bg-gradient-to-r from-cyan-500
                      to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={home_image} alt="my profile" 
                className='my-4 rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home