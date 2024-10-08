import Image from 'next/image';
import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { FaApple} from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const DashboardNav = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center h-16 p-4'>
       <button  className='text-xs sm:text-sm  mr-5 flex justify-center ' ><BiSolidCategory />Menu</button>
       {/* Adjusted text size */}
      <nav className='flex flex-row flex-nowrap gap-3 o'> {/* Use flex-nowrap to prevent wrapping and overflow-x-auto for scrolling */}
     
        <button id='DashboardNav' className='text-xs sm:text-sm'>Buy Used</button>
        <button id='DashboardNav' className='text-xs sm:text-sm'>Buy New</button>
        <button id='DashboardNav' className='text-xs sm:text-sm'>Get Loan</button>
        <button id='DashboardNav' className='text-xs sm:text-sm'>Get/Renew Insurance</button>
        <button id='DashboardNav' className='text-xs sm:text-sm'>Get Reports</button>
        
      </nav>
      <div id='youtube' className='h-2 w-2 mb-2 rounded-xl flex  items-center'>
      <SocialIcon id='icon' style={{height:"25px" , width:"25px"}}  className='mt-1 hover:scale-125' network="youtube" />
       <p className='hover:text-blue-600'>TVC</p>
      
      </div>
      <FaApple className=' ml-3' />
      <Image className=' ml-3' src='/images/playstore.webp' alt='appstore' width={10} height={3} />
      
    </div>
  );
}

export default DashboardNav;