import React from 'react';
import { SocialIcon } from 'react-social-icons';

const DashboardNav = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center h-16 p-4'>
       {/* Adjusted text size */}
      <nav className='flex flex-row flex-nowrap gap-3 o'> {/* Use flex-nowrap to prevent wrapping and overflow-x-auto for scrolling */}
      <h3 className='text-xs sm:text-sm mx-3'>All Category</h3>
        <h3 className='text-xs sm:text-sm'>Buy Used</h3>
        <h3 className='text-xs sm:text-sm'>Buy New</h3>
        <h3 className='text-xs sm:text-sm'>Get Loan</h3>
        <h3 className='text-xs sm:text-sm'>Get/Renew Insurance</h3>
        <h3 className='text-xs sm:text-sm'>Get Reports</h3>
      </nav>
      <div className='h-2 w-2'>
      <SocialIcon className='h-2 w-2' network="youtube" />
      </div>
    </div>
  );
}

export default DashboardNav;
