
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { IoCartOutline } from 'react-icons/io5'
import { SocialIcon } from 'react-social-icons'


const Navbar = () => {
  return (
    <div>
        <header className='bg-white shadow-md'>
    <div className='flex justify-between item-center max-w-6xl ms-auto p-3'>

        <div className='flex'>
        <Link href='/'>
    <Image src='/images/logo.png' alt="logo"
      height="100"
      width="100" 
      className="
      
        md:w-10,
        w-10,
      " />
      
    </Link>
    <p>Nepals Most trusted</p><br/>
      <p>MoterPlace</p>

        </div>
  
      <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input type='text' placeholder='Search...' 
        className="bg-transparent focus:outline-none w-24 sm:w-64" 
       />
       <FaSearch className='text-blue-700'/>
      </form>
      
      <ul className='flex gap-4 '>
        

      <SocialIcon network="whatsapp" />
      <IoCartOutline />
        {/* <Link href='/'><li className='hidden sm:inline text-salte-700 hover:underline'>Home</li></Link>
        <Link href='/about'><li className='hidden sm:inline text-salte-700 hover:underline'>About</li></Link>
        <Link href='/sign-in'><li className='text-salte-700 hover:underline'>Sign in</li></Link> */}
        </ul>
      </div>

    
 
    </header>
      
    </div>
  )
}

export default Navbar
