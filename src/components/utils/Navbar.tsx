import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { FaHeadset, FaSearch } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <div>
      <header className='bg-white shadow-md sticky '>
        <div className='flex justify-between items-start max-w-6xl mx-auto p-3'>

          <div className='flex items-center space-x-3'>
            <Link href='/'>
              <Image 
                src='/images/logo.png' 
                alt="logo"
                height="100"
                width="100" 
                className="md:w-[5.5rem] lg:w-[130px] lg:h-12"
              />
            </Link>
            <div className="flex flex-col">
              <p className="hidden lg:block">Nepal Most Trusted</p>
              <p className="hidden lg:block">MoterPlace</p>
            </div>
          </div>

          <form id='search' className="bg-slate-100 p-3 rounded-lg flex items-center  md:w-[237px]">
            <input 
              type='text' 
              placeholder='Search...' 
              className="bg-transparent focus:outline-none w-22 sm:w-64" 
            />
            <FaSearch className='text-blue-700'/>
          </form>

          <button className='flex items-center bg-white border border-gray-950 rounded-lg px-4 py-2 mx-4 hover:bg-gray-300'>
            <CiLocationOn className='mr-2' /> Location {/* Adjusted for inline icon */}
          </button>

          <ul className='flex gap-4'>
    <li id='whatsapp'><SocialIcon className='w-4 h-4' network="whatsapp" /></li>
    <li><IoCartOutline className='w-9 h-8' /></li>
    <li><FaHeadset className='w-9 h-8' /></li>
    <li><CgProfile className='w-9 h-8' /></li>
</ul>

        </div>
      </header>
    </div>
  )
}

export default Navbar;
