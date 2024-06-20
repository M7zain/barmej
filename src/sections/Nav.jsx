import React from 'react'
import { Logo } from '../assets';


const Nav = () => {
  return (
    
    <nav className='flex justify-between items-center p-4 w-full bg-white sticky top-0 z-10 lg:px-32'>
      
      {/* Logo */}
        <div>
            <img src={Logo} alt="Barmej-Logo" className='w-32 xl:ml-10' />
        </div>
        
        {/* list */}
     
            <ul className='flex space-x-10 xl:space-x-20 font-semibold text-black max-md:hidden'>
                <li className='hover:text-slate-500 cursor-pointer'>Home</li>
                <li className='hover:text-slate-500 cursor-pointer'>Services</li>
                <li className='hover:text-slate-500 cursor-pointer'>About</li>
                <li className='hover:text-slate-500 cursor-pointer'>Product</li>
                <li className='hover:text-slate-500 cursor-pointer'>FAQ</li>
            </ul>
    

        {/* Buttons */}

        <div className='space-x-4 '>
            <button className='text-pro-blue font-semibold'>
               Login
            </button>
            <button className='bg-pro-blue py-2 px-3 rounded-md text-slate-100 font-semibold'>
                Sign Up
            </button>
        </div>

    </nav>
  )
}

export default Nav